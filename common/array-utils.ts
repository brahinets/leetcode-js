export function matrixOfZeros(rows: number, cols: number): number[][] {
    const matrix: number[][] = [];

    for (let i: number = 0; i < rows; i++) {
        const row: number[] = [];
        for (let j: number = 0; j < cols; j++) {
            row.push(0);
        }

        matrix.push(row);
    }

    return matrix;
}