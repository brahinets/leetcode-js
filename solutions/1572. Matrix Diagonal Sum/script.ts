export {diagonalSum}

function diagonalSum(mat: number[][]): number {
    let sum: number = 0;

    for (let i: number = 0; i < mat.length; i++) {
        for (let j: number = 0; j < mat.length; j++) {
            if (i === j || i + j === mat.length - 1) {
                sum += mat[i][j];
            }
        }
    }

    return sum;
}