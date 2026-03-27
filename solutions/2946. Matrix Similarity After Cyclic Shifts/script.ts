export { areSimilar }

function areSimilar(mat: number[][], k: number): boolean {
    const rows: number = mat.length
    const columns: number = mat[0].length
    const shift: number = k % columns

    if (shift === 0) {
        return true
    }

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            if (row % 2 === 0) {
                if (mat[row][column] !== mat[row][(column + shift) % columns]) {
                    return false
                }
            } else {
                if (mat[row][column] !== mat[row][(column - shift + columns) % columns]) {
                    return false
                }
            }
        }
    }

    return true
}
