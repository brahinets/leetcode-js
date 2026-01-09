import {matrixOf} from "../../common/array-factories"

export {trapRainWater}

function trapRainWater(heightMap: number[][]): number {
    if (heightMap.length === 0 || heightMap[0].length === 0) {
        return 0
    }

    const minHeap: Cell[] = []
    const visited: boolean[][] = matrixOf(false, heightMap.length, heightMap[0].length)
    addBoundaryCellsToHeap(minHeap, visited, heightMap)

    return processCells(minHeap, heightMap, visited, heightMap.length, heightMap[0].length)
}

function processCells(minHeap: Cell[], heightMap: number[][], visited: boolean[][], m: number, n: number): number {
    const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let waterTrapped: number = 0

    while (minHeap.length > 0) {
        const current: Cell = minHeap.shift()!
        const x: number = current.x
        const y: number = current.y
        const height: number = current.height

        for (const [dx, dy] of directions) {
            const nx: number = x + dx
            const ny: number = y + dy

            if (isValidCell(nx, ny, m, n, visited)) {
                visited[nx][ny] = true

                if (heightMap[nx][ny] < height) {
                    waterTrapped += height - heightMap[nx][ny]
                }

                minHeap.push(new Cell(nx, ny, Math.max(height, heightMap[nx][ny])))
            }
        }

        minHeap.sort((a: Cell, b: Cell): number => a.height - b.height)
    }

    return waterTrapped
}

class Cell {
    constructor(public x: number, public y: number, public height: number) {
    }
}

function addBoundaryCellsToHeap(minHeap: Cell[], visited: boolean[][], heightMap: number[][]): void {
    for (let i: number = 0; i < heightMap.length; i++) {
        for (let j: number = 0; j < heightMap[0].length; j++) {
            if (isBoundary(i, j, heightMap.length, heightMap[0].length)) {
                minHeap.push(new Cell(i, j, heightMap[i][j]))
                visited[i][j] = true
            }
        }
    }

    minHeap.sort((a: Cell, b: Cell): number => a.height - b.height)
}

function isBoundary(i: number, j: number, m: number, n: number): boolean {
    return i === 0 || j === 0 || i === m - 1 || j === n - 1
}

function isValidCell(nx: number, ny: number, m: number, n: number, visited: boolean[][]): boolean {
    return nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]
}
