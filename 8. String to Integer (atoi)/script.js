const isDigit = (char) => char.match(/^\d+$/);
const MAX_INT32 = 2 ** 31 - 1;
const MIN_INT32 = -1 * 2 ** 31;

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    s = s.trim();

    let result = "";
    let sign = 1;
    if (s[0] === '-') {
        s = s.substring(1);
        sign = -1;
    } else if (s[0] === '+') {
        s = s.substring(1);
        sign = 1;
    }

    for (let char of s) {
        if (isDigit(char)) {
            result += char;
        } else {
            break;
        }
    }

    const number = sign * Number(result);
    return number > MAX_INT32 ? MAX_INT32 : number < MIN_INT32 ? MIN_INT32 : number;
};