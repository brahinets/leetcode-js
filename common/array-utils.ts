export {matrixOf, matrixOfZeros, matrixOfEmptyStrings}
export {arrayOf, arrayOfZeros}

function matrixOfZeros(rows: number, cols: number): number[][] {
    return matrixOf(0, rows, cols);
}

function matrixOfEmptyStrings(rows: number, cols: number): string[][] {
    return matrixOf("", rows, cols);
}

function matrixOf<Type>(val: Type, rows: number, cols: number): Type[][] {
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

function arrayOfZeros<Type>(size: number): number[] {
    return arrayOf(0, size);
}

function arrayOf<Type>(val: Type, size: number): Type[] {
    return new Array<Type>(size).fill(val);
}