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

export function matrixOfEmptyStrings(rows: number, cols: number): string[][] {
    const matrix: string[][] = [];

    for (let i: number = 0; i < rows; i++) {
        const row: string[] = [];
        for (let j: number = 0; j < cols; j++) {
            row.push("");
        }

        matrix.push(row);
    }

    return matrix;
}