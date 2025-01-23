import {arrayOfZeros} from "../../common/array-factories"

export {countServers}

function countServers(grid: number[][]): number {
    const rows: number[] = arrayOfZeros(grid.length)
    const cols: number[] = arrayOfZeros(grid[0].length)
    let totalServers: number = 0

    for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                rows[row]++
                cols[col]++
                totalServers++
            }
        }
    }

    for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1 && (rows[row] === 1 && cols[col] === 1)) {
                totalServers--
            }
        }
    }

    return totalServers
}
