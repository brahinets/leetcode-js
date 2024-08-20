import {arrayOfZeros, matrixOfZeros} from "../../common/array-factories"

export {stoneGameII}

function stoneGameII(piles: number[]): number {
    const dp: number[][] = matrixOfZeros(piles.length, piles.length)
    const sum: number[] = arrayOfZeros(piles.length + 1)
    for (let i: number = piles.length - 1; i >= 0; i--) {
        sum[i] = sum[i + 1] + piles[i]
    }

    function helper(i: number, m: number): number {
        if (i >= piles.length) {
            return 0
        }

        if (2 * m >= piles.length - i) {
            return sum[i]
        }

        if (dp[i][m] > 0) {
            return dp[i][m]
        }

        let res: number = 0
        for (let x: number = 1; x <= 2 * m; x++) {
            res = Math.max(res, sum[i] - helper(i + x, Math.max(m, x)))
        }
        dp[i][m] = res

        return res
    }

    return helper(0, 1)
}
