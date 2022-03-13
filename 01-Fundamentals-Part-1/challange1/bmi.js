function calculateBmi(mass, height){
    return mass / height ** 2;
}

const mark = [{weight: 78, height: 1.69},{weight: 95, height: 1.88}];
const john = [{weight: 92, height: 1.95}, {weight: 85, height: 1.76}];

for(let i=0; i<2; i++){
    const markBmi = calculateBmi(mark[i].weight, mark[i].height);
    const johnBmi = calculateBmi(john[i].weight, john[i].height);
    console.log(markBmi);
    console.log(johnBmi);
    const markHigherBMI = markBmi>johnBmi;
    console.log(`Mark has higher BMI than John:${markHigherBMI}`);
}

