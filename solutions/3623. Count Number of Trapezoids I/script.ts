export {countTrapezoids}

const MODULO: bigint = 1_000_000_007n

function countTrapezoids(points: number[][]): number {
    const yCoordinateCount: Map<number, number> = new Map<number, number>()
    for (const [, y] of points) {
        yCoordinateCount.set(y, (yCoordinateCount.get(y) ?? 0) + 1)
    }

    let totalTrapezoids: bigint = 0n
    let cumulativeEdges: bigint = 0n
    for (const count of yCoordinateCount.values()) {
        const edges: bigint = (BigInt(count) * BigInt(count - 1)) / 2n

        totalTrapezoids = (totalTrapezoids + edges * cumulativeEdges) % MODULO
        cumulativeEdges = (cumulativeEdges + edges) % MODULO
    }

    return Number(totalTrapezoids)
}
