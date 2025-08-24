export {merge}

function merge(intervals: number[][]): number[][] {
    intervals.sort((a: number[], b: number[]): number => a[0] - b[0])

    const result: number[][] = []
    let currentInterval: number[] = intervals[0]

    for (let i: number = 1; i < intervals.length; i++) {
        if (currentInterval[1] >= intervals[i][0]) {
            currentInterval[1] = Math.max(currentInterval[1], intervals[i][1])
        } else {
            result.push(currentInterval)
            currentInterval = intervals[i]
        }
    }

    result.push(currentInterval)

    return result
}
