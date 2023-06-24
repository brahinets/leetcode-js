import {matrixOf} from "../../common/array-utils";

export {tallestBillboard}

function tallestBillboard(rods: number[]): number {
    return solve(0, rods, 0, matrixOf(-1, rods.length, 5000 * 2 + 1));
}

function solve(i: number, rods: number[], diff: number, memo: number[][]): number {
    if (i === rods.length) {
        return diff === 0 ? 0 : Number.NEGATIVE_INFINITY;
    }

    if (!isNaN(memo[i][diff]) && memo[i][diff] !== -1) {
        return memo[i][diff];
    }

    const left: number = rods[i] + solve(i + 1, rods, diff + rods[i], memo);
    const right: number = solve(i + 1, rods, diff - rods[i], memo);
    const same: number = solve(i + 1, rods, diff, memo);

    return memo[i][diff] = Math.max(left, right, same);
}
