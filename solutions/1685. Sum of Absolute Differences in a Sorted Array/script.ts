export {getSumAbsoluteDifferences}

function getSumAbsoluteDifferences(nums: number[]): number[] {
    const sum: number = nums.reduce((a: number, b: number): number => a + b, 0)

    const result: number[] = []
    let leftSum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        const before: number = nums[i] * i - leftSum;
        const after: number = sum - leftSum - nums[i] * (nums.length - i);

        result.push(before + after)
        leftSum += nums[i]
    }

    return result
}
