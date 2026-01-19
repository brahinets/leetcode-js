import {matrixOfZeros} from "../../common/array-factories"

export {maxSideLength}

function maxSideLength(mat: number[][], threshold: number): number {
    const prefixSum: number[][] = matrixOfZeros(mat.length + 1, mat[0].length + 1)

    for (let r: number = 1; r <= mat.length; r++) {
        for (let c: number = 1; c <= mat[0].length; c++) {
            prefixSum[r][c] = mat[r - 1][c - 1] + prefixSum[r - 1][c] + prefixSum[r][c - 1] - prefixSum[r - 1][c - 1]
        }
    }

    let left: number = 0
    let right: number = Math.min(mat.length, mat[0].length)
    let result: number = 0

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)
        let found: boolean = false

        for (let r: number = mid; r <= mat.length; r++) {
            for (let c: number = mid; c <= mat[0].length; c++) {
                const total: number = prefixSum[r][c] - prefixSum[r - mid][c] - prefixSum[r][c - mid] + prefixSum[r - mid][c - mid]

                if (total <= threshold) {
                    found = true

                    break
                }
            }

            if (found) {
                break
            }
        }

        if (found) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
}
