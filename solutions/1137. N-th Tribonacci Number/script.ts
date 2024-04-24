export {tribonacci}

function tribonacci(n: number): number {
    return nthTribonacci(n, new Map<number, number>([[0, 0], [1, 1], [2, 1]]))
}

function nthTribonacci(n: number, memo: Map<number, number>): number {
    if (memo.has(n)) {
        return memo.get(n)!
    }

    const value: number = nthTribonacci(n - 1, memo) + nthTribonacci(n - 2, memo) + nthTribonacci(n - 3, memo)
    memo.set(n, value)

    return value
}
