import {matrixOf, matrixOfZeros} from '../../common/array-factories'

export {pathsWithMaxScore}

const MODULO: number = 1e9 + 7
const UNREACHABLE: number = -1

interface ReachableNeighbor {
    readonly score: number
    readonly count: number
}

function pathsWithMaxScore(board: string[]): number[] {
    const size: number = board.length
    const maxScoreGrid: number[][] = matrixOf(UNREACHABLE, size, size)
    const pathCountGrid: number[][] = matrixOfZeros(size, size)

    maxScoreGrid[0][0] = 0
    pathCountGrid[0][0] = 1

    for (let row: number = 0; row < size; row++) {
        for (let column: number = 0; column < size; column++) {
            if (row === 0 && column === 0) {
                continue
            }

            updateCell(board, maxScoreGrid, pathCountGrid, row, column)
        }
    }

    const finalScore: number = maxScoreGrid[size - 1][size - 1]

    if (finalScore === UNREACHABLE) {
        return [0, 0]
    }

    return [finalScore, pathCountGrid[size - 1][size - 1]]
}

function updateCell(board: string[], maxScoreGrid: number[][], pathCountGrid: number[][], row: number, column: number): void {
    const character: string = board[row][column]

    if (character === 'X') {
        return
    }

    const reachableNeighbors: ReachableNeighbor[] = collectReachableNeighbors(maxScoreGrid, pathCountGrid, row, column)

    if (reachableNeighbors.length === 0) {
        return
    }

    const bestNeighborScore: number = Math.max(...reachableNeighbors.map((neighbor: ReachableNeighbor): number => neighbor.score))

    let combinedCount: number = 0

    for (const neighbor of reachableNeighbors) {
        if (neighbor.score === bestNeighborScore) {
            combinedCount = (combinedCount + neighbor.count) % MODULO
        }
    }

    const cellValue: number = character === 'S' ? 0 : Number(character)

    maxScoreGrid[row][column] = bestNeighborScore + cellValue
    pathCountGrid[row][column] = combinedCount
}

function collectReachableNeighbors(maxScoreGrid: number[][], pathCountGrid: number[][], row: number, column: number): ReachableNeighbor[] {
    const neighborPositions: number[][] = [[row - 1, column], [row, column - 1], [row - 1, column - 1]]
    const reachableNeighbors: ReachableNeighbor[] = []

    for (const [neighborRow, neighborColumn] of neighborPositions) {
        if (neighborRow < 0 || neighborColumn < 0) {
            continue
        }

        const neighborScore: number = maxScoreGrid[neighborRow][neighborColumn]

        if (neighborScore === UNREACHABLE) {
            continue
        }

        reachableNeighbors.push({score: neighborScore, count: pathCountGrid[neighborRow][neighborColumn]})
    }

    return reachableNeighbors
}
