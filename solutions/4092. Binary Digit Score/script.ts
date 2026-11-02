export {binaryDigitScore}

function binaryDigitScore(a: number, b: number): number {
    const firstCount: number = countSetBits(a)
    const secondCount: number = countSetBits(b)

    if (firstCount >= secondCount) {
        return firstCount * secondCount
    }

    return Math.floor(secondCount / firstCount)
}

function countSetBits(value: number): number {
    let remaining: number = value
    let count: number = 0

    while (remaining > 0) {
        count += remaining & 1
        remaining >>= 1
    }

    return count
}
