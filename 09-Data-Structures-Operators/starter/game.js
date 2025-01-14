const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


for (const [i,el] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${el}`);
}

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(...Object.values(game.odds)));

for (const [key, value] of Object.entries(game.odds)) {
    console.log(`Odd of victory ${game[key]||'draw'}: ${value} `);
}

const scores = {};

for (const name of game.scored) {
    scores[name] = (scores[name]??0) + 1;
}
console.log(scores);
