'use strict';

const MAX_SCORE = 20;
let secretNumber = resolveSecretNumber();
let score = MAX_SCORE;
let highscore = 0;

function resolveSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  secretNumber = resolveSecretNumber();
  score = MAX_SCORE;
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (secretNumber === guess && score > 0) {
    document.querySelector('.message').textContent = 'Correct  number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guess) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost a game!';
    }
  }

  document.querySelector('.score').textContent = score;
});
