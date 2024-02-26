// const isEven = (a) => a % 2 !== 0;
// const isOdd = (b) => b % 2 === 0;

function estPairOuImpair(n) {
    if (n % 2 === 0) {
        return n + " est un nombre pair.";
    } else {
        return n + " est un nombre impair.";
    }
}

module.exports = { estPairOuImpair };



