import {arrayOfZeros} from "../../common/array-factories"

export {constrainedSubsetSum}

function constrainedSubsetSum(nums: number[], k: number): number {
    const dp: number[] = arrayOfZeros(nums.length)
    const queue: number[] = []

    for (let i: number = 0; i < nums.length; i++) {
        dp[i] = nums[i]

        if (queue.length) {
            dp[i] = Math.max(dp[i], queue[0] + nums[i])
        }

        while (queue.length && dp[i] > queue[queue.length - 1]) {
            queue.pop()
        }

        if (dp[i] > 0) {
            queue.push(dp[i])
        }

        if (i >= k && queue.length && queue[0] === dp[i - k]) {
            queue.shift()
        }
    }

    return Math.max(...dp)
}
