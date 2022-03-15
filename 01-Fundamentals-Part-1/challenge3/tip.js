function calculateTip(bill) {
    return bill >= 50 && bill <=300? bill*0.15: bill * 0.20;
}

const bills = [275, 40, 430];

for (const bill of bills) {
    const tip = calculateTip(bill);
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${(bill+tip).toFixed(2)}`)
}