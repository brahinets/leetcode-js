import {arrayOf, matrixOfZeros} from "../../common/array-factories";

export {subsequencePairCount}

function subsequencePairCount(nums: number[]): number {
    const MOD: number = 10 ** 9 + 7
    const n: number = nums.length
    const maxVal: number = Math.max(...nums)

    const dp: number[][][] = arrayOf(matrixOfZeros(maxVal + 1, maxVal + 1), n + 1)

    dp[0][0][0] = 1

    for (let i: number = 0; i < n; i++) {
        for (let g1: number = 0; g1 <= maxVal; g1++) {
            for (let g2: number = 0; g2 <= maxVal; g2++) {
                if (dp[i][g1][g2] === 0) continue

                const newG1: number = g1 === 0 ? nums[i] : gcd(g1, nums[i])
                dp[i + 1][newG1][g2] = (dp[i + 1][newG1][g2] + dp[i][g1][g2]) % MOD

                const newG2: number = g2 === 0 ? nums[i] : gcd(g2, nums[i])
                dp[i + 1][g1][newG2] = (dp[i + 1][g1][newG2] + dp[i][g1][g2]) % MOD

                dp[i + 1][g1][g2] = (dp[i + 1][g1][g2] + dp[i][g1][g2]) % MOD
            }
        }
    }

    let result: number = 0
    for (let g: number = 1; g <= maxVal; g++) {
        result = (result + dp[n][g][g]) % MOD
    }

    return result
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    }

    return gcd(b, a % b)
}
