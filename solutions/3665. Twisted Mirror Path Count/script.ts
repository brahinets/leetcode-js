import { matrixOfZeros } from '../../common/array-factories'

export { uniquePaths }

const PATH_MODULUS: number = 10 ** 9 + 7

type Direction = 'right' | 'down'

function uniquePaths(grid: number[][]): number {
    const rowCount: number = grid.length
    const columnCount: number = grid[0].length
    const pathCounts: number[][] = matrixOfZeros(rowCount, columnCount)

    for (let row: number = rowCount - 1; row >= 0; row--) {
        for (let column: number = columnCount - 1; column >= 0; column--) {
            const isDestination: boolean =
                row === rowCount - 1 && column === columnCount - 1

            if (isDestination) {
                pathCounts[row][column] = 1
                continue
            }

            const rightPaths: number = countAttempt(
                grid,
                pathCounts,
                row,
                column,
                'right'
            )
            const downPaths: number = countAttempt(
                grid,
                pathCounts,
                row,
                column,
                'down'
            )

            pathCounts[row][column] =
                (rightPaths + downPaths) % PATH_MODULUS
        }
    }

    return pathCounts[0][0]
}

function countAttempt(
    grid: number[][],
    pathCounts: number[][],
    row: number,
    column: number,
    direction: Direction
): number {
    const targetRow: number = direction === 'right' ? row : row + 1
    const targetColumn: number = direction === 'right' ? column + 1 : column

    if (targetRow >= grid.length || targetColumn >= grid[0].length) {
        return 0
    }

    if (grid[targetRow][targetColumn] !== 1) {
        return pathCounts[targetRow][targetColumn]
    }

    return countReflectionChain(
        grid,
        pathCounts,
        targetRow,
        targetColumn,
        direction
    )
}

function countReflectionChain(
    grid: number[][],
    pathCounts: number[][],
    mirrorRow: number,
    mirrorColumn: number,
    direction: Direction
): number {
    let currentDirection: Direction = turnDirection(direction)
    let landingRow: number =
        currentDirection === 'down' ? mirrorRow + 1 : mirrorRow
    let landingColumn: number =
        currentDirection === 'right' ? mirrorColumn + 1 : mirrorColumn

    while (true) {
        if (landingRow >= grid.length || landingColumn >= grid[0].length) {
            return 0
        }

        if (grid[landingRow][landingColumn] !== 1) {
            return pathCounts[landingRow][landingColumn]
        }

        currentDirection = turnDirection(currentDirection)

        if (currentDirection === 'down') {
            landingRow++
        } else {
            landingColumn++
        }
    }
}

function turnDirection(direction: Direction): Direction {
    return direction === 'right' ? 'down' : 'right'
}
