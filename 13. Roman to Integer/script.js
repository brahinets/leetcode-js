const ROMAN = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (roman) {
    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        if ((i < roman.length - 1) && ROMAN[roman[i]] < ROMAN[roman[i + 1]]) {
            result -= ROMAN[roman[i]];
        } else {
            result += ROMAN[roman[i]];
        }
    }

    return result;
};