export {onesMinusZeros}

function onesMinusZeros(grid: number[][]): number[][] {
    const rows: number = grid.length
    const cols: number = grid[0].length

    const onesInRow: number[] = new Array(rows).fill(0)
        .map((_: number, i: number): number => valuesInRow(grid, i, 1))
    const onesInColumn: number[] = new Array(cols).fill(0)
        .map((_: number, i: number): number => valuesInColumn(grid, i, 1))

    const result: number[][] = []
    for (let i: number = 0; i < rows; i++) {
        result.push([])

        for (let j: number = 0; j < grid[i].length; j++) {
            const zerosInRow: number = cols - onesInRow[i]
            const zerosInColumn: number = rows - onesInColumn[j]

            const diff: number = onesInRow[i] + onesInColumn[j] - zerosInRow - zerosInColumn
            result[i].push(diff)
        }
    }

    return result
}

function valuesInRow(grid: number[][], row: number, value: number): number {
    return grid[row].filter((n: number): boolean => n === value).length
}

function valuesInColumn(grid: number[][], column: number, value: number): number {
    return grid.map((row: number[]): number => row[column])
        .filter((n: number): boolean => n === value)
        .length
}
