import { matrixOfZeros } from "../../common/array-factories"

export { getBiggestThree }

function getBiggestThree(grid: number[][]): number[] {
    const m: number = grid.length
    const n: number = grid[0].length

    const dSum: number[][] = matrixOfZeros(m, n)
    const uSum: number[][] = matrixOfZeros(m, n)

    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            dSum[r][c] = grid[r][c] + (r > 0 && c > 0 ? dSum[r - 1][c - 1] : 0)
            uSum[r][c] = grid[r][c] + (r > 0 && c < n - 1 ? uSum[r - 1][c + 1] : 0)
        }
    }

    const top: Set<number> = new Set<number>()

    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            top.add(grid[r][c])
            trimToThree(top)

            const maxSize: number = Math.min(r, m - 1 - r, c, n - 1 - c)

            for (let s: number = 1; s <= maxSize; s++) {
                const e1: number = dSum[r][c + s] - (r - s > 0 && c > 0 ? dSum[r - s - 1][c - 1] : 0)
                const e2: number = uSum[r + s][c] - (r > 0 && c + s < n - 1 ? uSum[r - 1][c + s + 1] : 0)
                const e3: number = dSum[r + s][c] - (r > 0 && c - s > 0 ? dSum[r - 1][c - s - 1] : 0)
                const e4: number = uSum[r][c - s] - (r - s > 0 && c < n - 1 ? uSum[r - s - 1][c + 1] : 0)

                const sum: number = e1 + e2 + e3 + e4
                    - grid[r - s][c] - grid[r][c + s]
                    - grid[r + s][c] - grid[r][c - s]

                top.add(sum)
                trimToThree(top)
            }
        }
    }

    return [...top].sort((a: number, b: number) => b - a)
}

function trimToThree(top: Set<number>): void {
    if (top.size <= 3) {
        return
    }

    let min: number = Infinity

    for (const v of top) {
        if (v < min) min = v
    }

    top.delete(min)
}

