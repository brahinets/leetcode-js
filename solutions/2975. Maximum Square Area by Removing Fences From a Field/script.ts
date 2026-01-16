export {maximizeSquareArea}

const MOD: number = 10 ** 9 + 7

function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
    const horizontalGaps: Set<number> = findAllGaps(hFences, m)

    const verticalGaps: Set<number> = findAllGaps(vFences, n)

    const maxCommonGap: number = findMaxCommonGap(horizontalGaps, verticalGaps)
    if (maxCommonGap === 0) {
        return -1
    }

    return Number((BigInt(maxCommonGap) * BigInt(maxCommonGap)) % BigInt(MOD))
}

function findAllGaps(fences: number[], boundary: number): Set<number> {
    const allPositions: number[] = [...fences, 1, boundary]
    const sortedPositions: number[] = sortAscending(allPositions)
    const gaps: Set<number> = new Set()

    for (let i: number = 0; i < sortedPositions.length; i++) {
        for (let j: number = i + 1; j < sortedPositions.length; j++) {
            const gap: number = sortedPositions[j] - sortedPositions[i]
            gaps.add(gap)
        }
    }

    return gaps
}

function findMaxCommonGap(horizontalGaps: Set<number>, verticalGaps: Set<number>): number {
    let maxGap: number = 0

    for (const gap of horizontalGaps) {
        if (verticalGaps.has(gap) && gap > maxGap) {
            maxGap = gap
        }
    }

    return maxGap
}

function sortAscending(values: number[]): number[] {
    return values.slice().sort((a: number, b: number): number => a - b)
}
