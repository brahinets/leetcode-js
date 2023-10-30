export {sortByBits}

function sortByBits(arr: number[]): number[] {
    return arr.sort((a: number, b: number): number => {
        const aBitsCount: number = bitsCount(a)
        const bBitsCount: number = bitsCount(b)

        return aBitsCount === bBitsCount ? a - b : aBitsCount - bBitsCount
    })
}

function bitsCount(num: number): number {
    return num.toString(2)
        .split('')
        .filter((char: string): boolean => char === '1')
        .length
}
