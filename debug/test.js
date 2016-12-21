var Shoe = require('../src/shoe.js'),
    shoe = Shoe(1),
    Hand = require('../src/hand.js'),
    hand = Hand();

function print() {
    console.log(
        '\t\tHand:' + hand,
        '\n\t\tShoe:' + shoe,
        '\n\n'
    );
}

console.log('> Starting with...');
print();

console.log('> Dealing card...');
hand.add(shoe.draw());
print();

console.log('> Dealing card...');
hand.add(shoe.draw());
print();

console.log('> Shuffling shoe...');
shoe.shuffle();
print();

console.log('> Dealing card...');
hand.add(shoe.draw());
print();

console.log('> Dealing card...');
hand.add(shoe.draw());
print();

console.log('> Dealing card...');
hand.add(shoe.draw());
print();
