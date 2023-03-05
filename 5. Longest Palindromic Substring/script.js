/**
 * @param {string} string
 * @return {boolean} is string palindrome
 */
const isPalindrome = (string) => {
    for (let i = 0; i < string.length / 2; i++) {
        if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
            return false
        }
    }

    return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let maxPalindrome = "";

    for (let i = 0; i < s.length && i < s.length - maxPalindrome.length; i++) {
        for (let j = i; j < s.length; j++) {
            let checked = s.substring(i, j + 1);
            if (isPalindrome(checked) && checked.length > maxPalindrome.length) {
                maxPalindrome = checked;
            }
        }
    }

    return maxPalindrome;
};