export { hasValidPath }

type Direction = 'left' | 'right' | 'up' | 'down'

const STREET_CONNECTIONS: readonly (readonly Direction[])[] = [
    [],
    ['left', 'right'],
    ['up', 'down'],
    ['left', 'down'],
    ['right', 'down'],
    ['left', 'up'],
    ['right', 'up'],
]

const DIRECTION_DELTA: Readonly<Record<Direction, readonly [number, number]>> = {
    left:  [0, -1],
    right: [0,  1],
    up:    [-1, 0],
    down:  [1,  0],
}

const OPPOSITE_DIRECTION: Readonly<Record<Direction, Direction>> = {
    left:  'right',
    right: 'left',
    up:    'down',
    down:  'up',
}

function hasValidPath(grid: number[][]): boolean {
    const rows: number = grid.length
    const columns: number = grid[0].length
    const visited: boolean[][] = Array.from<unknown, boolean[]>(
        { length: rows },
        () => new Array<boolean>(columns).fill(false)
    )
    const stack: Array<[number, number]> = [[0, 0]]
    visited[0][0] = true

    while (stack.length > 0) {
        const [row, column] = stack.pop()!

        if (row === rows - 1 && column === columns - 1) {
            return true
        }

        for (const direction of STREET_CONNECTIONS[grid[row][column]]) {
            const [deltaRow, deltaColumn] = DIRECTION_DELTA[direction]
            const nextRow: number = row + deltaRow
            const nextColumn: number = column + deltaColumn

            if (nextRow < 0 || nextRow >= rows || nextColumn < 0 || nextColumn >= columns) {
                continue
            }

            if (visited[nextRow][nextColumn]) {
                continue
            }

            if (!STREET_CONNECTIONS[grid[nextRow][nextColumn]].includes(OPPOSITE_DIRECTION[direction])) {
                continue
            }

            visited[nextRow][nextColumn] = true
            stack.push([nextRow, nextColumn])
        }
    }

    return false
}
