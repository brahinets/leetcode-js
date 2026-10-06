export { maximumWeight }

const MAXIMUM_INTERVALS_COUNT: number = 4

interface IndexedInterval {
    readonly start: number
    readonly end: number
    readonly weight: number
    readonly index: number
}

interface Selection {
    readonly score: number
    readonly indices: readonly number[]
}

function maximumWeight(intervals: number[][]): number[] {
    const sortedIntervals: IndexedInterval[] = sortByEnd(intervals)
    const ends: number[] = sortedIntervals.map((interval: IndexedInterval): number => interval.end)
    const emptySelection: Selection = {score: 0, indices: []}
    const bestSelections: Selection[][] = []

    for (let count: number = 0; count <= MAXIMUM_INTERVALS_COUNT; count++) {
        bestSelections.push(new Array<Selection>(sortedIntervals.length + 1).fill(emptySelection))
    }

    for (let position: number = 0; position < sortedIntervals.length; position++) {
        const interval: IndexedInterval = sortedIntervals[position]
        const compatiblePrefixLength: number = countEndingBefore(ends, interval.start)

        for (let count: number = 1; count <= MAXIMUM_INTERVALS_COUNT; count++) {
            const skipped: Selection = bestSelections[count][position]
            const taken: Selection = extend(bestSelections[count - 1][compatiblePrefixLength], interval)

            bestSelections[count][position + 1] = isBetter(taken, skipped) ? taken : skipped
        }
    }

    return [...bestSelections[MAXIMUM_INTERVALS_COUNT][sortedIntervals.length].indices]
}

function sortByEnd(intervals: number[][]): IndexedInterval[] {
    return intervals
        .map((interval: number[], index: number): IndexedInterval => ({
            start: interval[0],
            end: interval[1],
            weight: interval[2],
            index
        }))
        .sort((first: IndexedInterval, second: IndexedInterval): number => first.end - second.end)
}

function countEndingBefore(ends: number[], start: number): number {
    let low: number = 0
    let high: number = ends.length

    while (low < high) {
        const middle: number = (low + high) >> 1

        if (ends[middle] < start) {
            low = middle + 1
        } else {
            high = middle
        }
    }

    return low
}

function extend(selection: Selection, interval: IndexedInterval): Selection {
    const indices: number[] = [...selection.indices, interval.index]
        .sort((first: number, second: number): number => first - second)

    return {score: selection.score + interval.weight, indices}
}

function isBetter(candidate: Selection, current: Selection): boolean {
    if (candidate.score !== current.score) {
        return candidate.score > current.score
    }

    return isLexicographicallySmaller(candidate.indices, current.indices)
}

function isLexicographicallySmaller(first: readonly number[], second: readonly number[]): boolean {
    const commonLength: number = Math.min(first.length, second.length)

    for (let position: number = 0; position < commonLength; position++) {
        if (first[position] !== second[position]) {
            return first[position] < second[position]
        }
    }

    return first.length < second.length
}
