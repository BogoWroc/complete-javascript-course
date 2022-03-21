function printForecast(arr) {
    let retValue = "";

    for (let i = 0; i < arr.length; i++) {
        retValue += ` ... ${arr[i]}ºC in ${i + 1} days`;
    }

    return retValue;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));



let a,b;

const obj = {a:1, b:3, fri:{open:"bla", close: 2}};

({a,b, fri:{open: o, close: c}} = obj);

console.log(a,b,o, c);