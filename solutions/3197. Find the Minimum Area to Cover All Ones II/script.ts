export {minimumSum}

function minimumSum(grid: number[][]): number {
    const m: number = grid.length
    const n: number = grid[0].length
    let minArea: number = Infinity

    for (let r1: number = 0; r1 < m - 2; r1++) {
        for (let r2: number = r1 + 1; r2 < m - 1; r2++) {
            const area1: number = getBoundingRect(0, 0, r1, n - 1, grid)
            const area2: number = getBoundingRect(r1 + 1, 0, r2, n - 1, grid)
            const area3: number = getBoundingRect(r2 + 1, 0, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    for (let c1: number = 0; c1 < n - 2; c1++) {
        for (let c2: number = c1 + 1; c2 < n - 1; c2++) {
            const area1: number = getBoundingRect(0, 0, m - 1, c1, grid)
            const area2: number = getBoundingRect(0, c1 + 1, m - 1, c2, grid)
            const area3: number = getBoundingRect(0, c2 + 1, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    for (let r: number = 0; r < m - 1; r++) {
        for (let c: number = 0; c < n - 1; c++) {
            const area1: number = getBoundingRect(0, 0, r, n - 1, grid)
            const area2: number = getBoundingRect(r + 1, 0, m - 1, c, grid)
            const area3: number = getBoundingRect(r + 1, c + 1, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    for (let r: number = 1; r < m; r++) {
        for (let c: number = 0; c < n - 1; c++) {
            const area1: number = getBoundingRect(0, 0, r - 1, c, grid)
            const area2: number = getBoundingRect(0, c + 1, r - 1, n - 1, grid)
            const area3: number = getBoundingRect(r, 0, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    for (let c: number = 0; c < n - 1; c++) {
        for (let r: number = 0; r < m - 1; r++) {
            const area1: number = getBoundingRect(0, 0, m - 1, c, grid)
            const area2: number = getBoundingRect(0, c + 1, r, n - 1, grid)
            const area3: number = getBoundingRect(r + 1, c + 1, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    for (let c: number = 1; c < n; c++) {
        for (let r: number = 0; r < m - 1; r++) {
            const area1: number = getBoundingRect(0, 0, r, c - 1, grid)
            const area2: number = getBoundingRect(r + 1, 0, m - 1, c - 1, grid)
            const area3: number = getBoundingRect(0, c, m - 1, n - 1, grid)

            if (area1 > 0 && area2 > 0 && area3 > 0) {
                minArea = Math.min(minArea, area1 + area2 + area3)
            }
        }
    }

    return minArea === Infinity ? 0 : minArea
}

function getBoundingRect(r1: number, c1: number, r2: number, c2: number, grid: number[][]): number {
    let minRow: number = r2
    let maxRow: number = r1 - 1
    let minCol: number = c2
    let maxCol: number = c1 - 1
    let hasOne: boolean = false

    for (let i: number = r1; i <= r2; i++) {
        for (let j: number = c1; j <= c2; j++) {
            if (grid[i][j] === 1) {
                hasOne = true
                minRow = Math.min(minRow, i)
                maxRow = Math.max(maxRow, i)
                minCol = Math.min(minCol, j)
                maxCol = Math.max(maxCol, j)
            }
        }
    }

    return hasOne ? (maxRow - minRow + 1) * (maxCol - minCol + 1) : 0
}
