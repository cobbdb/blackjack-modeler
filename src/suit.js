var map = {
    D: 'red',
    H: 'red',
    C: 'black',
    S: 'black'
};

module.exports = function (name) {
    return {
        name: name,
        color: map[name]
    };
};
