export {sortMatrix}

function sortMatrix(grid: number[][]): number[][] {
    for (let i: number = 0; i < grid.length; i++) {
        let tmp: number[] = []
        for (let j: number = 0; i + j < grid.length; j++) {
            tmp.push(grid[i + j][j])
        }

        tmp.sort((a: number, b: number): number => b - a)
        for (let j: number = 0; i + j < grid.length; j++) {
            grid[i + j][j] = tmp[j]
        }
    }

    for (let j: number = 1; j < grid.length; j++) {
        let tmp: number[] = []
        for (let i: number = 0; j + i < grid.length; i++) {
            tmp.push(grid[i][j + i])
        }

        tmp.sort((a: number, b: number): number => a - b)
        for (let i: number = 0; j + i < grid.length; i++) {
            grid[i][j + i] = tmp[i]
        }
    }

    return grid
}
