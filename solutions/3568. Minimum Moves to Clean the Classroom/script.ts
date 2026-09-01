export {minMoves}

const DIRECTIONS: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function minMoves(classroom: string[], energy: number): number {
    const rowCount: number = classroom.length
    const columnCount: number = classroom[0].length

    const litterIndexByPosition: Map<number, number> = new Map<number, number>()
    let startRow: number = 0
    let startColumn: number = 0

    for (let row: number = 0; row < rowCount; row++) {
        for (let column: number = 0; column < columnCount; column++) {
            const cell: string = classroom[row][column]
            if (cell === 'S') {
                startRow = row
                startColumn = column
            } else if (cell === 'L') {
                litterIndexByPosition.set(row * columnCount + column, litterIndexByPosition.size)
            }
        }
    }

    const fullLitterMask: number = (1 << litterIndexByPosition.size) - 1
    if (fullLitterMask === 0) {
        return 0
    }

    const energyLevelCount: number = energy + 1
    const maskCount: number = fullLitterMask + 1
    const visited: Uint8Array = new Uint8Array(rowCount * columnCount * energyLevelCount * maskCount)

    visited[encodeState(startRow, startColumn, energy, 0, columnCount, energyLevelCount, maskCount)] = 1
    let queue: number[][] = [[startRow, startColumn, energy, 0]]
    let moveCount: number = 0

    while (queue.length > 0) {
        const nextQueue: number[][] = []

        for (const state of queue) {
            const [row, column, remainingEnergy, litterMask]: number[] = state
            if (remainingEnergy === 0) {
                continue
            }

            for (const direction of DIRECTIONS) {
                const newRow: number = row + direction[0]
                const newColumn: number = column + direction[1]

                const outOfBounds: boolean = newRow < 0 || newRow >= rowCount || newColumn < 0 || newColumn >= columnCount
                if (outOfBounds) {
                    continue
                }

                const cell: string = classroom[newRow][newColumn]
                if (cell === 'X') {
                    continue
                }

                const newRemainingEnergy: number = cell === 'R' ? energy : remainingEnergy - 1
                const litterIndex: number | undefined = litterIndexByPosition.get(newRow * columnCount + newColumn)
                const newLitterMask: number = litterIndex === undefined ? litterMask : litterMask | (1 << litterIndex)

                if (newLitterMask === fullLitterMask) {
                    return moveCount + 1
                }

                const stateKey: number = encodeState(newRow, newColumn, newRemainingEnergy, newLitterMask, columnCount, energyLevelCount, maskCount)
                if (visited[stateKey] === 1) {
                    continue
                }

                visited[stateKey] = 1
                nextQueue.push([newRow, newColumn, newRemainingEnergy, newLitterMask])
            }
        }

        queue = nextQueue
        moveCount++
    }

    return -1
}

function encodeState(
    row: number,
    column: number,
    remainingEnergy: number,
    litterMask: number,
    columnCount: number,
    energyLevelCount: number,
    maskCount: number
): number {
    return ((row * columnCount + column) * energyLevelCount + remainingEnergy) * maskCount + litterMask
}
