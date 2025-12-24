import {arrayOf} from "../../common/array-factories"
import {sum} from "../../common/array-utils"

export {canPartition}

function canPartition(nums: number[]): boolean {
    const sumOfItems: number = sum(nums)

    if (sumOfItems % 2 !== 0) {
        return false
    }

    const target: number = sumOfItems / 2
    const dp: boolean[] = arrayOf(false, target + 1)
    dp[0] = true

    for (const num of nums) {
        for (let j: number = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num]
        }
    }

    return dp[target]
}
