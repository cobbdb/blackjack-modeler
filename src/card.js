/**
 * @param {string} o.suit
 * @param {string|number} o.face Can be `j`, `q`, `k`, `a`.
 * @return {Card}
 */
module.exports = function (o) {
    var value = o.face;

    if (['j', 'q', 'k'].indexOf(o.face) >= 0) {
        value = 10;
    } else if (o.face === 'a') {
        value = 1;
    }

    return {
        suit: o.suit,
        face: o.face,
        value: value,
        softValue: 11,
        toString: function () {
            return this.suit.name + this.face;
        }
    };
};
