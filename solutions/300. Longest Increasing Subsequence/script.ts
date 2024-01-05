import {arrayOf} from "../../common/array-factories"

export {lengthOfLIS}

function lengthOfLIS(nums: number[]): number {
    const longestSubsequencesByIndex: number[] = arrayOf(1, nums.length)

    for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                longestSubsequencesByIndex[i] = Math.max(
                    longestSubsequencesByIndex[i],
                    longestSubsequencesByIndex[j] + 1
                )
            }
        }
    }

    return Math.max(...longestSubsequencesByIndex)
}
