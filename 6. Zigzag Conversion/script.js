/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    let matrix = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        matrix.push(row);
    }

    let chars = s.split('');

    let toBottom = true;
    while (chars.length > 0) {
        if (toBottom) {
            for (let i = 0; i < numRows && chars.length > 0; i++) {
                let char = chars.shift();
                matrix[i].push(char);
            }
            toBottom = !toBottom;
        } else {
            for (let i = numRows - 1; i >= 0 && chars.length > 0; i--) {
                for (let j = 1; j < numRows - 1 && chars.length > 0; j++) {
                    if (i + j + 1 === numRows) {
                        let char = chars.shift();
                        matrix[i].push(char);
                    } else {
                        matrix[i].push("");
                    }
                }
            }

            toBottom = !toBottom;
        }
    }

    return matrix.reduce((str, row) => str + row.join(""), "");
};