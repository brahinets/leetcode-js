export { reverseSubmatrix }

function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
    let top: number = x
    let bottom: number = x + k - 1

    while (top < bottom) {
        for (let column: number = y; column < y + k; column++) {
            const temporary: number = grid[top][column]
            grid[top][column] = grid[bottom][column]
            grid[bottom][column] = temporary
        }

        top++
        bottom--
    }

    return grid
}
