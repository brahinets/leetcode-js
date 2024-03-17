export {insert}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [newStart, newEnd]: number[] = newInterval
    const result: number[][] = []
    const total: number = intervals.length

    let i: number = 0
    while (i < total && newStart > intervals[i][1]) {
        result.push(intervals[i])
        i++
    }

    while (i < total && newEnd >= intervals[i][0]) {
        newStart = Math.min(newStart, intervals[i][0])
        newEnd = Math.max(newEnd, intervals[i][1])
        i++
    }
    result.push([newStart, newEnd])

    while (i < total) {
        result.push(intervals[i])
        i++
    }

    return result
}
