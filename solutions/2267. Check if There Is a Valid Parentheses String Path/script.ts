export { hasValidPath }

function hasValidPath(grid: string[][]): boolean {
    const rowCount: number = grid.length
    const columnCount: number = grid[0].length

    if ((rowCount + columnCount) % 2 === 0) {
        return false
    }

    if (grid[0][0] === ')' || grid[rowCount - 1][columnCount - 1] === '(') {
        return false
    }

    const reachableBalances: boolean[][][] = createReachableBalancesGrid(rowCount, columnCount)

    reachableBalances[0][0][1] = true

    for (let row: number = 0; row < rowCount; row++) {
        for (let column: number = 0; column < columnCount; column++) {
            if (row === 0 && column === 0) {
                continue
            }

            const balanceDelta: number = grid[row][column] === '(' ? 1 : -1
            const maximumBalance: number = row + column + 1

            for (let balance: number = 0; balance <= maximumBalance; balance++) {
                const previousBalance: number = balance - balanceDelta

                if (previousBalance < 0) {
                    continue
                }

                const isReachableFromAbove: boolean = row > 0 && reachableBalances[row - 1][column][previousBalance]
                const isReachableFromLeft: boolean = column > 0 && reachableBalances[row][column - 1][previousBalance]

                if (isReachableFromAbove || isReachableFromLeft) {
                    reachableBalances[row][column][balance] = true
                }
            }
        }
    }

    return reachableBalances[rowCount - 1][columnCount - 1][0]
}

function createReachableBalancesGrid(rowCount: number, columnCount: number): boolean[][][] {
    const reachableBalancesGrid: boolean[][][] = []

    for (let row: number = 0; row < rowCount; row++) {
        const rowOfBalances: boolean[][] = []

        for (let column: number = 0; column < columnCount; column++) {
            rowOfBalances.push(new Array<boolean>(row + column + 2).fill(false))
        }

        reachableBalancesGrid.push(rowOfBalances)
    }

    return reachableBalancesGrid
}
