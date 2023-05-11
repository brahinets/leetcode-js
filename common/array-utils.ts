export function matrixOfZeros(rows: number, cols: number): number[][] {
    return matrixOf(0, rows, cols);
}

export function matrixOfEmptyStrings(rows: number, cols: number): string[][] {
    return matrixOf("", rows, cols);
}

export function matrixOf<Type>(val: Type, rows: number, cols: number): Type[][] {
    const matrix: Type[][] = [];

    for (let i: number = 0; i < rows; i++) {
        const row: Type[] = [];
        for (let j: number = 0; j < cols; j++) {
            row.push(val);
        }

        matrix.push(row);
    }

    return matrix;
}