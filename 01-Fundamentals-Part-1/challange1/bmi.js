function calculateBmi(mass, height){
    return mass / height ** 2;
}

const mark = [{weight: 78, height: 1.69},{weight: 95, height: 1.88}];
const john = [{weight: 92, height: 1.95}, {weight: 85, height: 1.76}];

for(let i=0; i<2; i++){
    const markBmi = calculateBmi(mark[i].weight, mark[i].height).toFixed(2);
    const johnBmi = calculateBmi(john[i].weight, john[i].height).toFixed(2);
    const markHigherBMI = markBmi>johnBmi;

    if(markHigherBMI){
        console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
    } else {
        console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
    }
}

