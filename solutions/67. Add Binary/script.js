/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length > b.length) {
        b = b.padStart(a.length, '0');
    } else {
        a = a.padStart(b.length, '0');
    }

    let aBits = a.split('');
    let bBits = b.split('');

    let shiftNextBit = false;
    let res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        let aBit = Number(aBits[i]);
        let bBit = Number(bBits[i]);
        let sum = shiftNextBit + aBit + bBit;

        res.push(sum % 2);

        shiftNextBit = sum > 1;
    }

    if (shiftNextBit) {
        res.push(1);
    }

    return res.reverse().join("");
};