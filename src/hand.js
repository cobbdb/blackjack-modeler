function sum(cards) {
    
}

module.exports = function () {
    return {
        cards: [],
        add: function (card) {
            this.cards.push(card);
            
            var sums = [];
            this.cards.forEach(function (card) {
                sums = sums.map(function (sum) {
                    return sum + card.value;
                });
                if (card.face === 'a') {
                    
                }
            }, this);
        },
        value: 0,
        hard: true
    };
};
