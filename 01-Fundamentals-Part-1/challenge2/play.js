function avg(...score){
    let sum = 0;
    score.forEach(e => sum+=e);
    return sum/score.length;
}

const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

const dAvg = avg(dolphins);
const kAvg = avg(koalas);

if (dAvg === kAvg) {
    console.log('It is draw!');
} else if (dAvg> kAvg){
    console.log('Dolphins won!');
} else {
    console.log('Koalas won!');
}