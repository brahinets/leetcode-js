import {arrayOf} from "../../common/array-factories"

export {maxSubarraySum}

function maxSubarraySum(nums: number[], k: number): number {
    const length: number = nums.length
    let currentPrefixSum: number = 0
    let maximumSubarraySum: number = -Number.MAX_SAFE_INTEGER
    const minPrefixSumByRemainder: number[] = arrayOf(Number.MAX_SAFE_INTEGER / 2, k)
    minPrefixSumByRemainder[k - 1] = 0

    for (let index: number = 0; index < length; index++) {
        currentPrefixSum += nums[index]

        const remainder: number = index % k
        maximumSubarraySum = Math.max(maximumSubarraySum, currentPrefixSum - minPrefixSumByRemainder[remainder])
        minPrefixSumByRemainder[remainder] = Math.min(minPrefixSumByRemainder[remainder], currentPrefixSum)
    }

    return maximumSubarraySum
}
