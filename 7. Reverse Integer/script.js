/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const signMultiplier = x < 0 ? -1 : 1;

    const reversedNumber = Number(String(Math.abs(x)).split('').reverse().join('')) * signMultiplier;

    if (reversedNumber < (Math.pow(2, 31) * -1) || reversedNumber > Math.pow(2, 31) - 1) {
        return 0;
    } else {
        return reversedNumber;
    }
};