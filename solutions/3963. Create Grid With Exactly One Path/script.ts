export { createGrid }

function createGrid(m: number, n: number): string[] {
    const grid: string[] = []

    for (let row: number = 0; row < m; row++) {
        grid.push(row === 0 ? '.'.repeat(n) : '#'.repeat(n - 1) + '.')
    }

    return grid
}
