/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    const odd = num => num % 2 === 1;

    let count = 0;

    if (!odd(low)) {
        low += 1;
    }

    for (let i = low; i <= high; i += 2) {
        count++;
    }

    return count;
};
