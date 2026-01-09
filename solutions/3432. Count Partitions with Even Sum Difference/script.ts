export {countPartitions}

function countPartitions(nums: number[]): number {
    const sum: number = nums.reduce((a: number, b: number): number => a + b, 0)

    return sum % 2 === 0 ? nums.length - 1 : 0
}
