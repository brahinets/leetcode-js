export {fib}

function fib(n: number): number {
    return nthFib(n, new Map<number, number>([[0, 0], [1, 1]]))
}

function nthFib(n: number, memo: Map<number, number>): number {
    if (memo.has(n)) {
        return memo.get(n)!
    }

    const value: number = nthFib(n - 1, memo) + nthFib(n - 2, memo)
    memo.set(n, value)

    return value
}
