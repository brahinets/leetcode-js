import {arrayOf} from "../../common/array-factories"

export {canPartition}

function canPartition(nums: number[]): boolean {
    const sum: number = nums.reduce((sum: number, num: number): number => sum + num, 0)

    if (sum % 2 !== 0) {
        return false
    }

    const target: number = sum / 2
    const dp: boolean[] = arrayOf(false, target + 1)
    dp[0] = true

    for (const num of nums) {
        for (let j: number = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num]
        }
    }

    return dp[target]
}
