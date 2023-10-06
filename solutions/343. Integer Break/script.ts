export {integerBreak}

const MIN_PART: number = 2

function integerBreak(n: number): number {
    if (n <= MIN_PART + 1) {
        return n - 1
    }

    let res:number = 1
    while (n > MIN_PART + 2) {
        res *= 3
        n -= (MIN_PART + 1)
    }

    return n * res
}
