export {findDiagonalOrder}

function findDiagonalOrder(mat: number[][]): number[] {
    const rows: number = mat.length
    const cols: number = mat[0].length
    const result: number[] = []
    let row: number = 0
    let col: number = 0
    let direction: number = 1

    for (let i: number = 0; i < rows * cols; i++) {
        result.push(mat[row][col])

        if (direction === 1) {
            if (col === cols - 1) {
                row++
                direction = -1
            } else if (row === 0) {
                col++
                direction = -1
            } else {
                row--
                col++
            }
        } else {
            if (row === rows - 1) {
                col++
                direction = 1
            } else if (col === 0) {
                row++
                direction = 1
            } else {
                row++
                col--
            }
        }
    }

    return result
}
