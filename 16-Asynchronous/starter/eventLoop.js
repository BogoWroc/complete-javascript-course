console.log("Start");
setTimeout(()=> console.log('0 sec timer'), 0);
Promise.resolve('Resolve promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
    for (let i = 0; i < 500000000; i++) {
    }
    console.log(res)
});
console.log("End");
