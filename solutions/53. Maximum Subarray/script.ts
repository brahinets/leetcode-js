export {maxSubArray}

function maxSubArray(nums: number[]): number {
    let maxSum: number = nums[0]
    let currentSum: number = nums[0]

    for (let i: number = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])

        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}
