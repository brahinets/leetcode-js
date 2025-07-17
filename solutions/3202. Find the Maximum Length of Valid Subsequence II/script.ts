import {matrixOfZeros} from "../../common/array-factories"

export {maximumLength}

function maximumLength(nums: number[], k: number): number {
    const dp: number[][] = matrixOfZeros(k, k)

    let maxLength: number = 0
    for (const num of nums) {
        const mod: number = num % k

        for (let previous = 0; previous < k; previous++) {
            dp[previous][mod] = dp[mod][previous] + 1

            maxLength = Math.max(maxLength, dp[previous][mod])
        }
    }

    return maxLength
}
