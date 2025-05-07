import {arrayOf} from "../../common/array-factories"

export {minTimeToReach}

const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function minTimeToReach(moveTime: number[][]): number {
    const totalCells: number = moveTime.length * moveTime[0].length
    const destination: number = totalCells - 1
    const distances: number[] = arrayOf(Infinity, totalCells)
    distances[0] = 0

    let currentCell: number = 0
    while (currentCell >= 0) {
        const currentDistance: number = distances[currentCell]
        if (currentCell === destination) {
            return distances[currentCell]
        }

        distances[currentCell] = -1

        const currentRow: number = Math.floor(currentCell / moveTime[0].length)
        const currentCol: number = currentCell % moveTime[0].length

        for (const [rowDelta, colDelta] of directions) {
            const nextRow: number = currentRow + rowDelta
            if (nextRow < 0 || nextRow >= moveTime.length) {
                continue
            }

            const nextCol: number = currentCol + colDelta
            if (nextCol < 0 || nextCol >= moveTime[0].length) {
                continue
            }

            const nextCell: number = nextRow * moveTime[0].length + nextCol
            if (distances[nextCell] < 0) {
                continue
            }

            distances[nextCell] = Math.min(
                distances[nextCell],
                Math.max(currentDistance, moveTime[nextRow][nextCol]) + 1
            )
        }

        let minDistance: number = Infinity
        currentCell = -1
        for (let cellIndex: number = 0; cellIndex < totalCells; cellIndex++) {
            if (distances[cellIndex] >= 0 && distances[cellIndex] < minDistance) {
                minDistance = distances[cellIndex]
                currentCell = cellIndex
            }
        }
    }

    return -1
}
