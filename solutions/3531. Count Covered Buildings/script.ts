export {countCoveredBuildings}

function countCoveredBuildings(n: number, buildings: number[][]): number {
    const rowMap: Map<number, Set<number>> = new Map<number, Set<number>>()
    const colMap: Map<number, Set<number>> = new Map<number, Set<number>>()
    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) {
            rowMap.set(x, new Set())
        }
        rowMap.get(x)!.add(y)

        if (!colMap.has(y)) {
            colMap.set(y, new Set())
        }
        colMap.get(y)!.add(x)
    }

    let coveredCount: number = 0
    for (const [x, y] of buildings) {
        const rowSet: Set<number> = rowMap.get(x)!
        const colSet: Set<number> = colMap.get(y)!

        const hasLeft: boolean = Array.from(rowSet).some((col: number): boolean => col < y)
        const hasRight: boolean = Array.from(rowSet).some((col: number): boolean => col > y)
        const hasUp: boolean = Array.from(colSet).some((row: number): boolean => row < x)
        const hasDown: boolean = Array.from(colSet).some((row: number): boolean => row > x)

        if (hasLeft && hasRight && hasUp && hasDown) {
            coveredCount++
        }
    }

    return coveredCount
}
