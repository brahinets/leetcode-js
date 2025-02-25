export {maxAscendingSum}

function maxAscendingSum(nums: number[]): number {
    let maxSum: number = nums[0]
    let currentSum: number = nums[0]

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i]
        } else {
            currentSum = nums[i]
        }

        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}
