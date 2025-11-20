export {intersectionSizeTwo}

function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a: number[], b: number[]): number => a[1] - b[1])

    let count: number = 0
    let first: number = -1
    let second: number = -1

    for (const [start, end] of intervals) {
        if (start <= first) {
            continue
        }

        if (start <= second) {
            count += 1
            first = second
            second = end
        } else {
            count += 2
            first = end - 1
            second = end
        }
    }

    return count
}
