function printForecast(arr) {
    let retValue = "";

    for (let i = 0; i < arr.length; i++) {
        retValue += ` ... ${arr[i]}ºC in ${i + 1} days`;
    }

    return retValue;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));