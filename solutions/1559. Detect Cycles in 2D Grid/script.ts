import { arrayOfZeros } from "../../common/array-factories"

export { containsCycle }

function containsCycle(grid: string[][]): boolean {
    const rows: number = grid.length
    const cols: number = grid[0].length
    const parent: number[] = arrayOfZeros(rows * cols).map((_: number, index: number): number => index)
    const rank: number[] = arrayOfZeros(rows * cols)

    for (let row: number = 0; row < rows; row++) {
        for (let column: number = 0; column < cols; column++) {
            if (column + 1 < cols && grid[row][column] === grid[row][column + 1]) {
                if (!union(parent, rank, row * cols + column, row * cols + column + 1)) {
                    return true
                }
            }

            if (row + 1 < rows && grid[row][column] === grid[row + 1][column]) {
                if (!union(parent, rank, row * cols + column, (row + 1) * cols + column)) {
                    return true
                }
            }
        }
    }

    return false
}


function find(parent: number[], x: number): number {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x])
    }

    return parent[x]
}

function union(parent: number[], rank: number[], x: number, y: number): boolean {
    const parentX: number = find(parent, x)
    const parentY: number = find(parent, y)

    if (parentX === parentY) {
        return false
    }

    if (rank[parentX] < rank[parentY]) {
        parent[parentX] = parentY
    } else if (rank[parentX] > rank[parentY]) {
        parent[parentY] = parentX
    } else {
        parent[parentY] = parentX
        rank[parentX]++
    }

    return true
}
