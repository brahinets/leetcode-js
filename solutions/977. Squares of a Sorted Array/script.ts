export {sortedSquares}

function sortedSquares(nums: number[]): number[] {
    return nums.map((a: number): number => a * a)
        .toSorted((a: number, b: number): number => a - b)
}
