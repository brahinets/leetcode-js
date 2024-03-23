export {isPowerOfTwo}

function isPowerOfTwo(n: number): boolean {
    if (n === 0) {
        return false
    }

    return n === 2 ** Math.round(Math.log(n) / Math.log(2))
}
