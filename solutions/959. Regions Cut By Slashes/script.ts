export {regionsBySlashes}

function regionsBySlashes(grid: string[]): number {
    const size: number = grid.length * grid.length * 4
    const dsu: number[] = buildUnions(size, grid.length, grid)

    return dsu.filter((_: number, i: number) => find(dsu, i) === i).length
}

function buildUnions(size: number, n: number, grid: string[]): number[] {
    const dsu: number[] = Array.from({length: size}, (_, i) => i)

    grid.forEach((row: string, i: number): void =>
        row.split('').forEach((cell: string, j: number): void => {
            const index: number = (i * n + j) * 4

            if (cell === ' ') {
                union(dsu, index, index + 1)
                union(dsu, index + 1, index + 2)
                union(dsu, index + 2, index + 3)
            } else if (cell === '/') {
                union(dsu, index, index + 3)
                union(dsu, index + 1, index + 2)
            } else {
                union(dsu, index, index + 1)
                union(dsu, index + 2, index + 3)
            }

            if (i > 0) {
                union(dsu, index, ((i - 1) * n + j) * 4 + 2)
            }
            if (j > 0) {
                union(dsu, index + 3, (i * n + j - 1) * 4 + 1)
            }
        })
    )

    return dsu
}

function union(dsu: number[], x: number, y: number): void {
    dsu[find(dsu, x)] = find(dsu, y)
}

function find(dsu: number[], val: number): number {
    return dsu[val] === val ? val : (dsu[val] = find(dsu, dsu[val]))
}
