import { arrayOf } from "../../common/array-factories"

export function maxSumTrionic(nums: number[]): number {
    const n: number = nums.length
    const dp0: number[] = arrayOf(-Infinity, n)
    const dp1: number[] = arrayOf(-Infinity, n)
    const dp2: number[] = arrayOf(-Infinity, n)
    const dp3: number[] = arrayOf(-Infinity, n)

    dp0[0] = nums[0]

    for (let i: number = 1; i < n; i++) {
        dp0[i] = nums[i]

        if (nums[i] > nums[i - 1]) {
            dp1[i] = Math.max(dp1[i - 1], dp0[i - 1]) + nums[i]
            dp3[i] = Math.max(dp3[i - 1], dp2[i - 1]) + nums[i]
        }

        if (nums[i] < nums[i - 1]) {
            dp2[i] = Math.max(dp2[i - 1], dp1[i - 1]) + nums[i]
        }
    }

    return Math.max(...dp3)
}
