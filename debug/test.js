var Shoe = require('../src/shoe.js'),
    shoe = Shoe(),
    _ = require('lodash');

function print() {
    console.log(
        '\nShoe contains',
        shoe.cards.length,
        'cards:\n' + shoe.cards
    );
}

print();
shoe.shuffle();
print();
