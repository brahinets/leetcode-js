export {searchMatrix}

function searchMatrix(matrix: number[][], target: number): boolean {
    for (const row of matrix) {
        if (row.includes(target)) {
            return true
        }
    }

    return false
}
