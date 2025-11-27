import {arrayOfZeros} from "../../common/array-factories"

export {maxSubarraySum}

function maxSubarraySum(nums: number[], k: number): number {
    const prefixSums: number[] = arrayOfZeros(nums.length + 1)
    for (let i: number = 0; i < nums.length; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i]
    }

    let maxSum: number = -Infinity
    for (let start: number = 0; start < nums.length; start++) {
        for (let end: number = start + k; end <= nums.length; end += k) {
            const currentSum: number = prefixSums[end] - prefixSums[start]
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
}
