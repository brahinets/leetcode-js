export {getSumAbsoluteDifferences}

function getSumAbsoluteDifferences(nums: number[]): number[] {
    const sum: number = nums.reduce((a: number, b: number): number => a + b, 0)

    const result: number[] = []
    let leftSum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        const countBefore: number = i - 1
        const countAfter: number = nums.length - i - 1

        const rightSum: number = sum - leftSum
        const before: number = nums[i] * countBefore - leftSum
        const after: number = rightSum - nums[i] * countAfter

        result.push(before + after)
        leftSum += nums[i]
    }

    return result
}
