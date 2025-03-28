import {PriorityQueue} from "../../common/PriorityQueue"
import {matrixOf, matrixOfZeros} from "../../common/array-factories"

export {maxPoints}

const DIRECTIONS: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]

function maxPoints(grid: number[][], queries: number[]): number[] {
    let result: number[] = []

    let sortedQueries: number[][] = matrixOfZeros(queries.length, 2)
    for (let index: number = 0; index < queries.length; index++) {
        sortedQueries[index][0] = queries[index]
        sortedQueries[index][1] = index
    }
    sortedQueries.sort((a: number[], b: number[]): number => a[0] - b[0])

    let minHeap: PriorityQueue<number[]> = new PriorityQueue<number[]>(
        (a: number[], b: number[]): number => a[0] - b[0]
    )

    let visited: boolean[][] = matrixOf(false, grid.length, grid[0].length)
    let totalPoints: number = 0
    minHeap.enqueue([grid[0][0], 0, 0])
    visited[0][0] = true

    for (const [queryValue, queryIndex] of sortedQueries) {
        while (!minHeap.isEmpty() && minHeap.peek()![0] < queryValue) {
            const [, currentRow, currentCol]: number[] = minHeap.dequeue()!
            totalPoints++

            for (const dir of DIRECTIONS) {
                const newRow: number = currentRow + dir[0]
                const newCol: number = currentCol + dir[1]

                if (newRow >= 0 && newCol >= 0 && newRow < grid.length && newCol < grid[0].length && !visited[newRow][newCol]) {
                    minHeap.enqueue([grid[newRow][newCol], newRow, newCol])
                    visited[newRow][newCol] = true
                }
            }
        }
        result[queryIndex] = totalPoints
    }

    return result
}
