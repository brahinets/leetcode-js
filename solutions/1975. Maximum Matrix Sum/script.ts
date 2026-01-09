export {maxMatrixSum}

function maxMatrixSum(matrix: number[][]): number {
    let sum: number = 0
    let min: number = Infinity
    let count: number = 0

    for (let row of matrix) {
        for (let num of row) {
            sum += Math.abs(num)
            min = Math.min(min, Math.abs(num))

            if (num < 0) {
                count++
            }
        }
    }

    return count % 2 === 0 ? sum : sum - 2 * min
}
