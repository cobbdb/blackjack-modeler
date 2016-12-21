var Card = require('./card.js'),
    Suit = require('./suit.js'),
    faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'],
    suits = [
        Suit('D'),
        Suit('H'),
        Suit('C'),
        Suit('S')
    ];

module.exports = function () {
    var cards = [];
    
    faces.forEach(function (face) {
        suits.forEach(function (suit) {
            cards.push(Card({
                suit: suit,
                face: face
            }));
        });
    });

    return {
        cards: cards
    };
};
