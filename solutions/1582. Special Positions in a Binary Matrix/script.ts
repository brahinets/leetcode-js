export {numSpecial}

function numSpecial(mat: number[][]): number {
    let count: number = 0

    for (let i: number = 0; i < mat.length; i++) {
        for (let j: number = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1 && isSpecial(mat, i, j)) {
                count++
            }
        }
    }

    return count
}

function isSpecial(mat: number[][], i: number, j: number): boolean {
    return isOnlyOneInRow(mat, i) && isOnlyOneInColumn(mat, j)
}

function isOnlyOneInRow(mat: number[][], row: number): boolean {
    return mat[row].filter((n: number): boolean => n === 1).length === 1
}

function isOnlyOneInColumn(mat: number[][], column: number): boolean {
    return mat
        .map((row: number[]): number => row[column])
        .filter((n: number): boolean => n === 1)
        .length === 1
}
