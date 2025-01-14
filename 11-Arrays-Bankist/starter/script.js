'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movs, sort = false) {
    containerMovements.innerHTML = '';

    const movements = sort ? movs.slice().sort((a, b) => a - b) : movs
    movements.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `<div class="movements__row">
                        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                        <div class="movements__value">${mov}€</div>
                      </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} €`
}

const createUserNames = function (accounts) {
    accounts.forEach((it) =>
        it.username = it.owner.toLowerCase()
            .split(" ")
            .map((e) => e[0])
            .join('')
    );
}

const calcDisplaySummary = (acc) => {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((dep) => dep * acc.interestRate / 100)
        .filter((int) => int >= 1)
        .reduce((acc, cur) => acc + cur, 0);

    labelSumIn.textContent = `${incomes} €`
    labelSumOut.textContent = `${Math.abs(out)} €`
    labelSumInterest.textContent = `${interest} €`


}

createUserNames(accounts);

const startLogOutTimer = function () {
    let time = 10;
    const tick = () => {
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = time % 60;
        labelTimer.textContent = `${min}:${sec}`;

        if (time === 0) {
            clearInterval(timer);

            labelWelcome.textContent = `Log in to get started`;
            containerApp.style.opacity = 0;
        }

        time--;
    }
    tick();
    const timer = setInterval(tick, 1000)
    return timer;
}

let sorted = false;
btnSort.addEventListener('click', (e) => {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted
});

btnLoan.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(it => it >= amount * 0.1)) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);

        clearInterval(timer);
        timer = startLogOutTimer();
    }

    inputLoanAmount.value = '';
});

btnTransfer.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        updateUI(currentAccount);

        clearInterval(timer);
        timer = startLogOutTimer();
    }
});

function updateUI(acc) {
    displayMovements(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        inputCloseUsername.value = inputClosePin.value = '';

        if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
            const index = accounts.findIndex(acc => acc.username === currentAccount.username);

            accounts.splice(index, 1);

            containerApp.style.opacity = 0;
        }
    }
);

let currentAccount, timer;
btnLogin.addEventListener('click', (e) => {

    // prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        if (timer) clearInterval(timer);
        timer = startLogOutTimer();
        updateUI(currentAccount);
    }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////