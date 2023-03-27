export {climbStairs}

function climbStairs(n: number, memo: Map<number, number> = new Map<number, number>()): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    let value: number | undefined = memo.get(n);
    if (!value) {
        value = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
        memo.set(n, value);
    }

    return value;
}