export {minFallingPathSum}

function minFallingPathSum(matrix: number[][]): number {
    let maxBefore: number[] = matrix[0]

    for (let i: number = 1; i < matrix.length; i++) {
        const maxInCurrent: number[] = []

        for (let j: number = 0; j < matrix[i].length; j++) {
            const now: number = matrix[i][j]
            const up: number = now + maxBefore[j]
            const left: number = now + (maxBefore[j - 1] || Infinity)
            const right: number = now + (maxBefore[j + 1] || Infinity)

            maxInCurrent[j] = Math.min(up, left, right)
        }

        maxBefore = maxInCurrent
    }

    return Math.min(...maxBefore)
}
