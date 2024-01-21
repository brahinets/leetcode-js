import {matrixOf} from "../../common/array-factories"

export {highestPeak}

const DIRECTIONS: number[][] = [[0, 1], [0, -1], [1, 0], [-1, 0]]

function highestPeak(isWater: number[][]): number[][] {
    const result: number[][] = matrixOf(-1, isWater.length, isWater[0].length)
    const queue: number[][] = []

    for (let i: number = 0; i < isWater.length; i++) {
        for (let j: number = 0; j < isWater[0].length; j++) {
            if (isWater[i][j] === 1) {
                result[i][j] = 0
                queue.push([i, j])
            }
        }
    }

    while (queue.length) {
        const [i, j]: number[] = queue.shift()!

        for (const [di, dj] of DIRECTIONS) {
            const ni: number = i + di
            const nj: number = j + dj

            if (ni >= 0 && ni < isWater.length && nj >= 0 && nj < isWater[0].length && result[ni][nj] === -1) {
                result[ni][nj] = result[i][j] + 1
                queue.push([ni, nj])
            }
        }
    }

    return result
}
