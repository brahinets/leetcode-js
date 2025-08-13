export {isPowerOfThree}

function isPowerOfThree(n: number): boolean {
    if (n <= 0) {
        return false
    }

    while (n % 3 === 0) {
        n /= 3
    }

    return n === 1
}
