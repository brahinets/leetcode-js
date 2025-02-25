export {minGroups}

function minGroups(intervals: number[][]): number {
    const events: [number, number][] = []
    for (const interval of intervals) {
        events.push([interval[0], 1])
        events.push([interval[1] + 1, -1])
    }

    events.sort(([aStart, aEnd]: [number, number], [bStart, bEnd]: [number, number]): number => {
        if (aStart === bStart) {
            return aEnd - bEnd
        } else {
            return aStart - bStart
        }
    })

    let concurrentIntervals: number = 0
    let maxConcurrentIntervals: number = 0


    for (const [, eventType] of events) {
        concurrentIntervals += eventType
        maxConcurrentIntervals = Math.max(maxConcurrentIntervals, concurrentIntervals)
    }

    return maxConcurrentIntervals
}
