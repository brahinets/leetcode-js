export { maximumScore }

function buildColumnPrefix(grid: number[][], size: number): number[][] {
    const columnPrefix: number[][] = []

    for (let column = 0; column < size; column++) {
        const prefix = new Array<number>(size).fill(0)
        prefix[0] = grid[0]![column]!

        for (let row = 1; row < size; row++) {
            prefix[row] = prefix[row - 1]! + grid[row]![column]!
        }

        columnPrefix.push(prefix)
    }

    return columnPrefix
}

function columnRangeSum(columnPrefix: number[][], column: number, fromRow: number, toRow: number): number {
    if (fromRow > toRow || toRow < 0) {
        return 0
    }

    return columnPrefix[column]![toRow]! - (fromRow > 0 ? columnPrefix[column]![fromRow - 1]! : 0)
}

function makeGrid(rows: number, columns: number, fill: number): number[][] {
    const grid: number[][] = []

    for (let row = 0; row < rows; row++) {
        grid.push(new Array<number>(columns).fill(fill))
    }

    return grid
}

function maximumScore(grid: number[][]): number {
    const size = grid.length
    const columnPrefix = buildColumnPrefix(grid, size)
    const NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY

    let dp = makeGrid(size + 1, size + 1, NEGATIVE_INFINITY)

    for (let currentCut = 0; currentCut <= size; currentCut++) {
        dp[0]![currentCut] = 0
    }

    for (let column = 0; column < size - 1; column++) {
        const nextDp = makeGrid(size + 1, size + 1, NEGATIVE_INFINITY)

        for (let currentCut = 0; currentCut <= size; currentCut++) {
            const prefixMax = new Array<number>(size + 1).fill(NEGATIVE_INFINITY)
            prefixMax[0] = dp[0]![currentCut]!

            for (let previousCut = 1; previousCut <= size; previousCut++) {
                prefixMax[previousCut] = Math.max(prefixMax[previousCut - 1]!, dp[previousCut]![currentCut]!)
            }

            const suffixMaxG = new Array<number>(size + 2).fill(NEGATIVE_INFINITY)

            for (let previousCut = size; previousCut >= 0; previousCut--) {
                const base = dp[previousCut]![currentCut]!
                const value = base === NEGATIVE_INFINITY
                    ? NEGATIVE_INFINITY
                    : base + columnRangeSum(columnPrefix, column, currentCut, previousCut - 1)

                suffixMaxG[previousCut] = Math.max(value, suffixMaxG[previousCut + 1]!)
            }

            for (let nextCut = 0; nextCut <= size; nextCut++) {
                const caseA = prefixMax[nextCut]! === NEGATIVE_INFINITY
                    ? NEGATIVE_INFINITY
                    : prefixMax[nextCut]! + columnRangeSum(columnPrefix, column, currentCut, nextCut - 1)

                const caseB = nextCut < size ? suffixMaxG[nextCut + 1]! : NEGATIVE_INFINITY
                const best = Math.max(caseA, caseB)

                if (best > nextDp[currentCut]![nextCut]!) {
                    nextDp[currentCut]![nextCut] = best
                }
            }
        }

        dp = nextDp
    }

    let answer = 0

    for (let previousCut = 0; previousCut <= size; previousCut++) {
        for (let currentCut = 0; currentCut <= size; currentCut++) {
            const base = dp[previousCut]![currentCut]!

            if (base === NEGATIVE_INFINITY) {
                continue
            }

            const total = base + columnRangeSum(columnPrefix, size - 1, currentCut, previousCut - 1)

            if (total > answer) {
                answer = total
            }
        }
    }

    return answer
}
