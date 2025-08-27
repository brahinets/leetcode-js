export {lenOfVDiagonal}

function lenOfVDiagonal(grid: number[][]): number {
    const n: number = grid.length
    const m: number = grid[0].length
    let maxLength: number = 0

    const directions: number[][] = [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
    ]

    for (let startR: number = 0; startR < n; startR++) {
        for (let startC: number = 0; startC < m; startC++) {
            if (grid[startR][startC] !== 1) {
                continue
            }

            for (let dirIdx: number = 0; dirIdx < 4; dirIdx++) {
                const straightLength: number = extendPath(startR, startC, dirIdx, 0, grid, directions, n, m)
                maxLength = Math.max(maxLength, straightLength)

                const [dr, dc]: number[] = directions[dirIdx]
                for (let steps: number = 1; steps < straightLength; steps++) {
                    const turnR: number = startR + dr * steps
                    const turnC: number = startC + dc * steps

                    for (let newDirIdx: number = 0; newDirIdx < 4; newDirIdx++) {
                        if (newDirIdx === dirIdx) {
                            continue
                        }

                        const expectedClockwise: number = (dirIdx + 1) % 4
                        if (newDirIdx !== expectedClockwise) {
                            continue
                        }

                        const totalLength: number = extendPath(turnR, turnC, newDirIdx, steps, grid, directions, n, m)
                        maxLength = Math.max(maxLength, totalLength)
                    }
                }
            }
        }
    }

    return maxLength
}

function isValid(r: number, c: number, n: number, m: number): boolean {
    return r >= 0 && r < n && c >= 0 && c < m
}

function getExpectedValue(index: number): number {
    if (index === 0) {
        return 1
    }

    return index % 2 === 1 ? 2 : 0
}

function extendPath(startR: number, startC: number, dirIdx: number, startIndex: number, grid: number[][], directions: number[][], n: number, m: number): number {
    const [dr, dc]: number[] = directions[dirIdx]
    let r: number = startR
    let c: number = startC
    let length: number = startIndex

    while (isValid(r, c, n, m) && grid[r][c] === getExpectedValue(length)) {
        length++
        r += dr
        c += dc
    }

    return length
}
