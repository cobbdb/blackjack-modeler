var _ = require('lodash');

module.exports = function () {
    return {
        cards: [],
        add: function (card) {
            this.cards.push(card);

            var sums = [{
                value: 0,
                hard: true
            }];
            this.cards.forEach(function (card) {
                var softSums = [];
                if (card.face === 'a') {
                    softSums = _.clone(sums);
                    softSums = softSums.map(function (sum) {
                        return {
                            value: sum.value + card.softValue,
                            hard: false
                        };
                    });
                }
                sums = sums.map(function (sum) {
                    return {
                        value: sum.value + card.value,
                        hard: sum.hard
                    };
                });
                sums = _.concat(sums, softSums);
            }, this);

            this.value = 0;
            sums.forEach(function (sum) {
                if (sum.value <= 21 && sum.value > this.value) {
                    this.value = sum.value;
                    this.hard = sum.hard;
                }
            }, this);
            if (this.value === 0) {
                this.value = sums[0].value;
                this.hard = sums[0].hard;
            }
        },
        value: 0,
        hard: true,
        toString: function () {
            return (
                '<' + this.value + '> ' +
                '(' + (this.hard ? 'hard' : 'soft') + ') ' +
                this.cards
            );
        }
    };
};
