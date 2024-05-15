import {matrixOf} from "../../common/array-factories"

export {maximumSafenessFactor}

const TURNS: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]
const NOT_VISITED: number = -1
const VISITED: number = -2
const THIEF: number = 1

function maximumSafenessFactor(grid: number[][]): number {
    const safenessGrid: number[][] = buildSafenessGrid(grid)

    const safenessPriority: [number, number, number][] = [[0, 0, safenessGrid[0][0]]]
    safenessGrid[0][0] = VISITED
    while (safenessPriority.length > 0) {
        let maxIndex: number = 0
        for (let i: number = 1; i < safenessPriority.length; i++) {
            if (safenessPriority[i][2] > safenessPriority[maxIndex][2]) {
                maxIndex = i
            }
        }
        const [x, y, safeness]: number[] = safenessPriority.splice(maxIndex, 1)[0]

        if (x === grid.length - 1 && y === grid[0].length - 1) {
            return safeness
        }

        for (const [moveX, moveY] of TURNS) {
            const [newX, newY]: [number, number] = [x + moveX, y + moveY]

            if (inBounds(safenessGrid, newX, newY) && safenessGrid[newX][newY] !== VISITED) {
                safenessPriority.push([newX, newY, Math.min(safeness, safenessGrid[newX][newY])])
                safenessGrid[newX][newY] = VISITED
            }
        }
    }

    return -1
}

function buildSafenessGrid(grid: number[][]): number[][] {
    const safenessGrid: number[][] = matrixOf(NOT_VISITED, grid.length, grid[0].length)

    const toVisit: [number, number][] = []
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[0].length; j++) {
            if (grid[i][j] === THIEF) {
                toVisit.push([i, j])
                safenessGrid[i][j] = 0
            } else {
                safenessGrid[i][j] = -1
            }
        }
    }

    while (toVisit.length > 0) {
        const currentLevelSize: number = toVisit.length

        for (let i: number = 0; i < currentLevelSize; i++) {
            const [x, y]: number[] = toVisit.shift()!

            for (const [moveX, moveY] of TURNS) {
                const cellSafeness: number = safenessGrid[x][y]
                const [newX, newY]: [number, number] = [x + moveX, y + moveY]

                if (inBounds(safenessGrid, newX, newY) && safenessGrid[newX][newY] === NOT_VISITED) {
                    safenessGrid[newX][newY] = cellSafeness + 1
                    toVisit.push([newX, newY])
                }
            }
        }
    }

    return safenessGrid
}

function inBounds(grid: number[][], row: number, col: number): boolean {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length
}
