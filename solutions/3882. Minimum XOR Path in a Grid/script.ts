export { minCost }

function minCost(grid: number[][]): number {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const xorValues: Set<number>[][] = Array.from(
        { length: rows },
        (): Set<number>[] =>
            Array.from(
                { length: columns },
                (): Set<number> => new Set<number>()
            )
    )

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < columns; column++) {
            const cellValue: number = grid[row][column]
            const cellXorValues: Set<number> = xorValues[row][column]

            if (row === 0 && column === 0) {
                cellXorValues.add(cellValue)
                continue
            }

            if (row > 0) {
                for (const upperValue of xorValues[row - 1][column]) {
                    cellXorValues.add(upperValue ^ cellValue)
                }
            }

            if (column > 0) {
                for (const leftValue of xorValues[row][column - 1]) {
                    cellXorValues.add(leftValue ^ cellValue)
                }
            }
        }
    }

    return Math.min(...xorValues[rows - 1][columns - 1])
}
