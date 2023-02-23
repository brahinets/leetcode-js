const SPECIAL_ROMAN = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
}

const REGULAR_ROMAN = {
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
var romanToInt = function (roman) {
    let result = 0;

    let cursor = 0;
    while (cursor < roman.length) {
        let val = 0;

        if (SPECIAL_ROMAN[roman[cursor] + roman[cursor + 1]]) {
            val += SPECIAL_ROMAN[roman[cursor] + roman[cursor + 1]];
            cursor += 2;
        } else {
            val += REGULAR_ROMAN[roman[cursor]];
            cursor += 1;
        }

        result += val;
    }

    return result;
};