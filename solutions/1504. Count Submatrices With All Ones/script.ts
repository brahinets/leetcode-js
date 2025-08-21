import {matrixOfZeros} from "../../common/array-factories"

export {numSubmat}

function numSubmat(mat: number[][]): number {
    const dp: number[][] = matrixOfZeros(mat.length, mat[0].length)
    let count: number = 0

    for (let i: number = 0; i < mat.length; i++) {
        for (let j: number = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                dp[i][j] = (j === 0 ? 1 : dp[i][j - 1] + 1)

                let minWidth: number = dp[i][j]

                for (let k: number = i; k >= 0; k--) {
                    if (mat[k][j] === 0) {
                        break
                    }

                    minWidth = Math.min(minWidth, dp[k][j])
                    count += minWidth
                }
            }
        }
    }

    return count
}
