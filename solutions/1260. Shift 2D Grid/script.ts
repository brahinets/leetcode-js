export { shiftGrid }

function shiftGrid(grid: number[][], k: number): number[][] {
    const rows: number = grid.length
    const cols: number = grid[0].length
    const totalElements: number = rows * cols
    const normalizedK: number = k % totalElements

    if (normalizedK === 0) {
        return grid.map((row: number[]): number[] => [...row])
    }

    const result: number[][] = grid.map((row: number[]): number[] => [...row])

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const currentIndex: number = i * cols + j
            const newIndex: number = (currentIndex + normalizedK) % totalElements
            const newRow: number = Math.floor(newIndex / cols)
            const newCol: number = newIndex % cols
            result[newRow][newCol] = grid[i][j]
        }
    }

    return result
}