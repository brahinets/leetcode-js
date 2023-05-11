import {matrixOf} from "../../common/array-utils";

export {maxUncrossedLines}

function maxUncrossedLines(up: number[], bottom: number[]): number {
    return uncrossedLines(up, bottom, 0, 0, matrixOf(-1, up.length, bottom.length));
}

function uncrossedLines(up: number[], bottom: number[], start: number, end: number, memo: number[][]): number {
    if (start === up.length || end === bottom.length) {
        return 0;
    }

    if (memo[start][end] !== -1) {
        return memo[start][end];
    }

    let number: number;
    if (up[start] === bottom[end]) {
        number = 1 + uncrossedLines(up, bottom, start + 1, end + 1, memo);
    } else {
        number = Math.max(
            uncrossedLines(up, bottom, start + 1, end, memo),
            uncrossedLines(up, bottom, start, end + 1, memo)
        );
    }

    memo[start][end] = number;
    return number;
}