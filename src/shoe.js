var _ = require('lodash'),
    Deck = require('./deck.js');

/**
 * @param {number} depth
 * @return {Shoe}
 */
module.exports = function (depth) {
    var decks = _.times(depth || 6, function () {
        return Deck().cards;
    });

    return {
        cards: _.flatten(decks),
        draw: function () {
            return this.cards.pop();
        },
        shuffle: function () {
            this.cards = _.shuffle(this.cards);
        },
        toString: function () {
            return '<' + this.cards.length + '> ' + this.cards;
        }
    };
};
