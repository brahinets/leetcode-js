export {countTrapezoids}

type SlopeToIntercept = Map<number, number[]>
type MidToSlope = Map<number, number[]>

const INF_SLOPE: number = 1e9 + 7

function countTrapezoids(points: number[][]): number {
    const slopeToIntercept: SlopeToIntercept = new Map<number, number[]>()
    const midToSlope: MidToSlope = new Map<number, number[]>()

    populatePairMaps(points, INF_SLOPE, slopeToIntercept, midToSlope)

    const positivePairs: number = countPairsBySlope(slopeToIntercept)
    const collinearCorrection: number = countPairsByMid(midToSlope)

    return positivePairs - collinearCorrection
}

function populatePairMaps(
    points: number[][],
    INF_SLOPE: number,
    slopeToIntercept: SlopeToIntercept,
    midToSlope: MidToSlope
): void {
    const n: number = points.length

    for (let i: number = 0; i < n; i++) {
        const [x1, y1] = points[i]

        for (let j: number = i + 1; j < n; j++) {
            const [x2, y2] = points[j]
            const dx: number = x1 - x2
            const dy: number = y1 - y2

            const {slope, intercept} = computeSlopeIntercept(x1, y1, x2, y2, dx, dy, INF_SLOPE)
            const midKey: number = computeMidKey(x1, y1, x2, y2)

            if (!slopeToIntercept.has(slope)) {
                slopeToIntercept.set(slope, [])
            }
            slopeToIntercept.get(slope)!.push(intercept)

            if (!midToSlope.has(midKey)) {
                midToSlope.set(midKey, [])
            }
            midToSlope.get(midKey)!.push(slope)
        }
    }
}

function computeSlopeIntercept(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    dx: number,
    dy: number,
    INF_SLOPE: number
): { slope: number, intercept: number } {
    if (x2 === x1) {
        return {slope: INF_SLOPE, intercept: x1}
    }

    const slope: number = (y2 - y1) / (x2 - x1)
    const intercept: number = (y1 * dx - x1 * dy) / dx

    return {slope, intercept}
}

function computeMidKey(x1: number, y1: number, x2: number, y2: number): number {
    return (x1 + x2) * 10000 + (y1 + y2)
}

function countPairsBySlope(slopeToIntercept: SlopeToIntercept): number {
    let total: number = 0
    for (const intercepts of slopeToIntercept.values()) {
        if (intercepts.length <= 1) {
            continue
        }
        total += countCombinationsGroupedByValue(intercepts)
    }
    return total
}

function countPairsByMid(midToSlope: MidToSlope): number {
    let total: number = 0

    for (const slopes of midToSlope.values()) {
        if (slopes.length <= 1) {
            continue
        }
        total += countCombinationsGroupedByValue(slopes)
    }

    return total
}

function countCombinationsGroupedByValue(values: number[]): number {
    const frequency: Map<number, number> = new Map<number, number>()
    for (const v of values) {
        frequency.set(v, (frequency.get(v) || 0) + 1)
    }

    let pairs: number = 0
    let prefixSum: number = 0
    for (const count of frequency.values()) {
        pairs += prefixSum * count
        prefixSum += count
    }

    return pairs
}
