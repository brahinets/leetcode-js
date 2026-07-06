export {removeCoveredIntervals}

function removeCoveredIntervals(intervals: number[][]): number {
    const sortedIntervals: number[][] = intervals.sort(compareByStartAscendingThenEndDescending)

    let remainingIntervalCount: number = 0
    let furthestEnd: number = 0

    for (const [, end] of sortedIntervals) {
        if (end > furthestEnd) {
            remainingIntervalCount++
            furthestEnd = end
        }
    }

    return remainingIntervalCount
}

function compareByStartAscendingThenEndDescending(firstInterval: number[], secondInterval: number[]): number {
    if (firstInterval[0] === secondInterval[0]) {
        return secondInterval[1] - firstInterval[1]
    }

    return firstInterval[0] - secondInterval[0]
}
