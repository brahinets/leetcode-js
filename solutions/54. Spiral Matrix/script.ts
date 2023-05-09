export {spiralOrder}

function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];

    while (matrix.length > 0 && matrix[0].length > 0) {
        result.push(...matrixBorder(matrix));
        matrix = matrixCenter(matrix);
    }

    return result;
}

function matrixBorder(matrix: number[][]): number[] {
    const result: number[] = [];

    for (let col: number = 0; col < matrix[0].length; col++) {
        result.push(matrix[0][col]);
    }

    for (let row: number = 1; row < matrix.length; row++) {
        result.push(matrix[row][matrix[0].length - 1]);
    }

    if (matrix.length > 1) {
        for (let col: number = matrix[0].length - 2; col >= 0; col--) {
            result.push(matrix[matrix.length - 1][col]);
        }
    }

    if (matrix[0].length > 1) {
        for (let row: number = matrix.length - 2; row > 0; row--) {
            result.push(matrix[row][0]);
        }
    }

    return result;
}

function matrixCenter(matrix: number[][]): number[][] {
    const rows: number = matrix.length;
    const cols: number = matrix[0].length;
    const center: number[][] = [];

    if (rows === 0 || cols === 0) {
        return [[]];
    }

    let i: number = 0;
    for (const row of matrix) {
        if (i !== 0 && i !== rows - 1) {
            const slice: number[] = row.slice(1, cols - 1);

            if (slice.length > 0) {
                center.push(slice)
            }
        }

        i++;
    }

    return center;
}
