/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    let i = 0;

    while (i <= haystack.length - needle.length) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }

        i++;
    }

    return -1;
};