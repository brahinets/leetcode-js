/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    const result = [];

    for (let i = 0; i < chars.length;) {
        const char = chars[i];

        let count = 0;
        while (chars[i] === char) {
            count++;
            i++;
        }

        result.push(char);
        if (count > 1) {
            result.push(...String(count));
        }
    }

    chars.length = 0;
    chars.push(...result)

    return result.length;
};