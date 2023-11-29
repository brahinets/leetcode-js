export {hammingWeight}

function hammingWeight(n: number): number {
    return bitsCount(n)
}

function bitsCount(num: number): number {
    return num.toString(2)
        .split('')
        .filter((char: string): boolean => char === '1')
        .length
}
