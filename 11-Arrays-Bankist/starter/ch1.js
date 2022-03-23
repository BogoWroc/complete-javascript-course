'use strict';

function checkDogs(dogsJulia, dogsKate){

    const onlyDogs = dogsJulia.slice(1,-2);
    const allDogs = onlyDogs.concat(dogsKate);

    allDogs.forEach((v,i)=>{
       if (v<3){
           console.log(`Dog number ${i + 1} is still a puppy`);
       } else {
           console.log(`Dog number ${i + 1} is an adult, and is ${v} years old`);
       }
    });
}

checkDogs([3,5,2,12,7],[4,1,15,8,3]);
checkDogs([9,16,6,8,3],[10,5, 6,1,4]);
