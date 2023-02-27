/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const signMultiplier = x < 0 ? -1 : 1;

    const val = String(Math.abs(x)).split("").reverse();
    while (val && val[0] === '0') {
        val.shift();
    }

    const reversedNumber = signMultiplier * Number(val.join(''));

    if (reversedNumber < (Math.pow(2, 31) * -1) || reversedNumber > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return reversedNumber;
    }
};