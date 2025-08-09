export {rotate}

function rotate(matrix: number[][]): void {
    const n: number = matrix.length;

    for (let i: number = 0; i < n / 2; i++) {
        for (let j: number = i; j < n - i - 1; j++) {
            const temp: number = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
}
