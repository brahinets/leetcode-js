export {regionsBySlashes}

function regionsBySlashes(grid: string[]): number {
    const size: number = grid.length * grid.length * 4
    const dsu: number[] = buildUnions(size, grid.length, grid)

    let count: number = 0
    for (let i: number = 0; i < size; i++) {
        if (find(dsu, i) === i) {
            count++
        }
    }

    return count
}

function buildUnions(size: number, n: number, grid: string[]): number[] {
    const dsu: number[] = Array.from({length: size}, (_, i) => i)

    for (let i: number = 0; i < n; i++) {
        for (let j: number = 0; j < n; j++) {
            const index: number = i * n + j
            const start: number = index * 4

            if (grid[i][j] === ' ') {
                union(dsu, start, start + 1)
                union(dsu, start + 1, start + 2)
                union(dsu, start + 2, start + 3)
            } else if (grid[i][j] === '/') {
                union(dsu, start, start + 3)
                union(dsu, start + 1, start + 2)
            } else {
                union(dsu, start, start + 1)
                union(dsu, start + 2, start + 3)
            }

            if (i > 0) {
                union(dsu, start, (index - n) * 4 + 2)
            }

            if (j > 0) {
                union(dsu, start + 3, (index - 1) * 4 + 1)
            }
        }
    }
    return dsu;
}

function union(dsu: number[], x: number, y: number) {
    dsu[find(dsu, x)] = find(dsu, y)
}

function find(dsu: number[], val: number): number {
    if (dsu[val] !== val) {
        dsu[val] = find(dsu, dsu[val])
    }

    return dsu[val]
}
