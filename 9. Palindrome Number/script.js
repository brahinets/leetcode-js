/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let str = String(x);
    let middle = str.length / 2;

    for (let i = 0; i < middle; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
};