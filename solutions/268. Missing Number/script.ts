export {missingNumber}

function missingNumber(nums: number[]): number {
    const required: number = nums.length

    const actualSum: number = nums.reduce((sum: number, n: number): number => sum + n, 0)
    const expectedSum: number = ((required * required) + required) / 2

    return expectedSum - actualSum
}
