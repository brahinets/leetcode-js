import {matrixOf} from "../../common/array-factories"

export {maxDotProduct}

function maxDotProduct(nums1: number[], nums2: number[]): number {
    const dp: number[][] = matrixOf(-Infinity, nums1.length, nums2.length)

    for (let i: number = 0; i < nums1.length; i++) {
        for (let j: number = 0; j < nums2.length; j++) {
            dp[i][j] = nums1[i] * nums2[j]

            if (i > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
            }

            if (j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i][j - 1])
            }

            if (i > 0 && j > 0) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + nums1[i] * nums2[j])
            }
        }
    }

    return dp[nums1.length - 1][nums2.length - 1]
}
