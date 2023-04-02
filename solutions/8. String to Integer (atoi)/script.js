const isNumber = (char) => char.match(/^\d+$/);
const MAX_INT32 = 2 ** 31 - 1;
const MIN_INT32 = -1 * 2 ** 31;

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    let digits = "";

    for (let char of s.trim()) {
        if (char === '-' || char === '+') {
            if (digits) {
                break;
            } else {
                digits += char;
            }
        } else if (isNumber(char)) {
            digits += char;
        } else {
            break;
        }
    }

    const number = Number(digits) ? Number(digits) : 0;
    return number > MAX_INT32 ? MAX_INT32 : number < MIN_INT32 ? MIN_INT32 : number;
};