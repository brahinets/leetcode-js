export {tallestBillboard}

function tallestBillboard(rods: number[]): number {
    return solve(0, rods, 0, []);
}

function solve(i: number, rods: number[], diff: number, memo: number[][]): number {
    if (i === rods.length) {
        return diff === 0 ? 0 : Number.NEGATIVE_INFINITY;
    }

    if (memo[i]?.[diff] !== undefined) {
        return memo[i][diff];
    }

    const left: number = rods[i] + solve(i + 1, rods, diff + rods[i], memo);
    const right: number = solve(i + 1, rods, diff - rods[i], memo);
    const same: number = solve(i + 1, rods, diff, memo);
    const num: number = Math.max(left, right, same);

    memo[i] = memo[i] || [];
    memo[i][diff] = num;
    return num;
}
