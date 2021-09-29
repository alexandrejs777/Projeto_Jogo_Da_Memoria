const FRONT = 'card-front';
const BACK = 'card-back';

let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];

createCardsFromTechs(techs);

function createCardsFromTechs(techs){
    let cards = [];

    for (let tech of techs){
        cards.push(createPairFromTechs(tech))
    }
    
    console.log(cards.flatMap(pair => pair))
    return cards.flatMap(pair => pair);
}

function createPairFromTechs(tech){
    return [
        {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
        },
        {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false
        }
    ]
}

function createIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000);
}