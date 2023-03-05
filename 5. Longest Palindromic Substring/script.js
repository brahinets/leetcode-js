/**
 * @param {string} string
 * @return {string} reversed string
 */
const reverse = (string) => string.split("").reverse().join("");

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let maxPalindrome = "";

    for (let i = 0; i < s.length && i < s.length - maxPalindrome.length; i++) {
        for (let j = i; j < s.length; j++) {
            let checked = s.substring(i, j + 1);
            if (checked === reverse(checked) && checked.length > maxPalindrome.length) {
                maxPalindrome = checked;
            }
        }
    }

    return maxPalindrome;
};