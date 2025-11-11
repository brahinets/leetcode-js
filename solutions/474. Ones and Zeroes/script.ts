import {matrixOfZeros} from "../../common/array-factories"

export {findMaxForm}

function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = matrixOfZeros(m + 1, n + 1)

    for (const str of strs) {
        const zeros: number = str.split('0').length - 1
        const ones: number = str.length - zeros

        for (let i: number = m; i >= zeros; i--) {
            for (let j: number = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1)
            }
        }
    }

    return dp[m][n]
}
