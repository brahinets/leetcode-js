/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    const pairs = {
        "[": "]",
        "{": "}",
        "(": ")",
    };

    let stack = [];
    for (let ch of s) {
        if (pairs.hasOwnProperty(ch)) {
            stack.push(ch);
        } else if (getKeyByValue(pairs, ch)) {
            let closed = getKeyByValue(pairs, ch);
            let opened = stack.pop();

            if (opened !== closed) {
                return false;
            }
        } else {
            throw new Error(`Unsupported character: ${ch}`);
        }
    }

    return stack.length === 0;
};