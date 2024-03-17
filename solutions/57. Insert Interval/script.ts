export {insert}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [start, end]: number[] = newInterval
    const result: number[][] = []
    const total: number = intervals.length

    let i: number = 0
    while (i < total && start > intervals[i][1]) {
        result.push(intervals[i])
        i++
    }

    while (i < total && end >= intervals[i][0]) {
        start = Math.min(start, intervals[i][0])
        end = Math.max(end, intervals[i][1])
        i++
    }
    result.push([start, end])

    while (i < total) {
        result.push(intervals[i])
        i++
    }

    return result
}
