export {largestLocal}

function largestLocal(grid: number[][]): number[][] {
    const result: number[][] = []

    for (let i: number = 1; i < grid.length - 1; i++) {
        const row: number[] = []

        for (let j: number = 1; j < grid[i].length - 1; j++) {
            row.push(Math.max(
                ...grid[i - 1].slice(j - 1, j + 1 + 1),
                ...grid[i].slice(j - 1, j + 1 + 1),
                ...grid[i + 1].slice(j - 1, j + 1 + 1)
            ))
        }

        result.push(row)
    }

    return result
}
