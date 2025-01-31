import {DisjointSetUnion} from "../../common/DisjointSetUnion"

export {largestIsland}

const directions: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

function largestIsland(grid: number[][]): number {
    const dsu: DisjointSetUnion = new DisjointSetUnion(grid.length * grid.length)

    unionIslands(grid, dsu, directions)

    const componentSize: Map<number, number> = calculateComponentSizes(grid, dsu)

    return findMaxIsland(grid, dsu, componentSize, directions)
}

function index(x: number, y: number, n: number): number {
    return x * n + y
}

function unionIslands(grid: number[][], dsu: DisjointSetUnion, directions: number[][]): void {
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                for (const [dx, dy] of directions) {
                    const ni: number = i + dx, nj: number = j + dy

                    if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid.length && grid[ni][nj] === 1) {
                        dsu.union(index(i, j, grid.length), index(ni, nj, grid.length))
                    }
                }
            }
        }
    }
}

function calculateComponentSizes(grid: number[][], dsu: DisjointSetUnion): Map<number, number> {
    const componentSize: Map<number, number> = new Map<number, number>()

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid.length; j++) {
            if (grid[i][j] === 1) {
                const root: number = dsu.find(index(i, j, grid.length))

                componentSize.set(root, (componentSize.get(root) || 0) + 1)
            }
        }
    }

    return componentSize
}

function findMaxIsland(grid: number[][], dsu: DisjointSetUnion, componentSize: Map<number, number>, directions: number[][]): number {
    let maxIsland: number = Math.max(...componentSize.values(), 0)

    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid.length; j++) {
            if (grid[i][j] === 0) {
                let newSize: number = 1
                const seen: Set<number> = new Set<number>()

                for (const [dx, dy] of directions) {
                    const ni: number = i + dx, nj: number = j + dy

                    if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid.length && grid[ni][nj] === 1) {
                        const root: number = dsu.find(index(ni, nj, grid.length))

                        if (!seen.has(root)) {
                            newSize += componentSize.get(root) || 0
                            seen.add(root)
                        }
                    }
                }

                maxIsland = Math.max(maxIsland, newSize)
            }
        }
    }

    return maxIsland
}
