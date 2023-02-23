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

    for (let i = 0; i < roman.length; i++) {
        let val = 0;

        if (i < roman.length - 1 && SPECIAL_ROMAN[roman[i] + roman[i + 1]]) {
            val += SPECIAL_ROMAN[roman[i] + roman[i + 1]];
            i += 1;
        } else {
            val += REGULAR_ROMAN[roman[i]];
        }

        result += val;
    }

    return result;
};