'use strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];


dogs.forEach(it => {
   it.recommendedFood = Math.trunc(it.weight ** 0.75 *28);
});

console.log(dogs);

const sarahDogs = dogs.filter(it => it.owners.includes('Sarah'));
console.log(sarahDogs);

const ownersEatTooMuch = dogs.filter(it=> it.recommendedFood > it.curFood).map(it => it.owners).flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(it=> it.recommendedFood < it.curFood).flatMap(it => it.owners);
console.log(ownersEatTooLittle);

console.log(ownersEatTooMuch.sort().join(' and ') + '\'s dogs eat too much!');
console.log(`${ownersEatTooLittle.sort().join(' and ')}'s dogs eat too little!`);

console.log(dogs.some(it => it.curFood === it.recommendedFood));

const dogsSorted = dogs.slice().sort((a,b)=> a.recommendedFood-b.recommendedFood);
console.log(dogsSorted);
