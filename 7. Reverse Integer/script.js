/**
 * @param {number} x
 * @return {number}
 */

const MAX_INT32 = 2**31 - 1;
const MIN_INT32 = -1 * 2**31;

const reverse = function (x) {
    const sign = x < 0 ? -1 : 1;

    const reversedNumber = Number(String(Math.abs(x)).split('').reverse().join('')) * sign;

    if (reversedNumber < MIN_INT32 || reversedNumber > MAX_INT32) {
        return 0;
    } else {
        return reversedNumber;
    }
};