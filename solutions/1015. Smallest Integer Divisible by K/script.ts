export {smallestRepunitDivByK}

function smallestRepunitDivByK(k: number): number {
    if (k % 2 === 0 || k % 5 === 0) {
        return -1
    }

    let remainder: number = 0
    for (let length: number = 1; length <= k; length++) {
        remainder = (remainder * 10 + 1) % k

        if (remainder === 0) {
            return length
        }
    }

    return -1
}
