export {onesMinusZeros}

function onesMinusZeros(grid: number[][]): number[][] {
    const result: number[][] = []

    for (let i: number = 0; i < grid.length; i++) {
        result.push([])
        for (let j: number = 0; j < grid[i].length; j++) {
            const onesInRow: number = valuesInRow(grid, i, 1)
            const onesInColumn: number = valuesInColumn(grid, j, 1)
            const zerosInRow: number = grid[i].length - onesInRow
            const zerosInColumn: number = grid.length - onesInColumn

            const diff: number = onesInRow + onesInColumn - zerosInRow - zerosInColumn
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
