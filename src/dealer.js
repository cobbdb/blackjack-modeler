var Hand = require('./hand.js');

module.exports = {
    hand: Hand(),
    reset: function () {
        this.hand = Hand();
    },
    decide: function () {
        return 'S';
    }
};
