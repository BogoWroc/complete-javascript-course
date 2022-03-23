'use strict';

function calcAverageHumanAge(ages){
    const humanAges = ages.map(it => {
            if (it <= 2) {
                return it * 2;
            } else {
                return 16 + it * 4;
            }
        }
    );
    console.log(humanAges);
    const adults = humanAges.filter(it=> it >=18);
    console.log(adults)
    const avg = adults.reduce((acc, cur) =>acc+cur, 0)/adults.length
    console.log(avg);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
