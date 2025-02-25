export {sortedSquares}

function sortedSquares(nums: number[]): number[] {
    return nums.map((a: number): number => a ** 2)
        .sort((a: number, b: number): number => a - b)
}

