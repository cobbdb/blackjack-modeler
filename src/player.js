var Hand = require('./hand.js'),
    grid = require('../grids/simple.js');

module.exports = {
    hand: Hand(),
    decide: function (upcard) {
        var type = hand.hard ? 'hard' : 'soft',
            decision = false;

        if (hand.canSplit()) {
            grid.split.forEach(function (block) {
                var maps = block[1];
                if (block[0].includes(this.hand.cards[0])) {
                    maps.forEach(function (map) {
                        if (map[0].includes(upcard.value)) {
                            decision = map[1];
                        }
                    }, this);
                }
            }, this);
        }

        if (!decision) {
            grid[type].forEach(function (block) {
                var maps = block[1];
                if (block[0].includes(this.hand.cards[0])) {
                    maps.forEach(function (map) {
                        if (map[0].includes(upcard.value)) {
                            decision = map[1];
                        }
                    }, this);
                }
            }, this);
        }

        return decision || (function () {
            throw Error('Failed to make Player decision!');
        }());
    }
};
