export {minGroups}

function minGroups(intervals: number[][]): number {
    intervals.sort((a: number[], b: number[]): number => a[0] - b[0])

    const pq: number[] = []

    for (const [start, end] of intervals) {
        if (pq.length > 0 && pq[0] <= start) {
            pq.shift()
        }

        pq.push(end)
        pq.sort((a: number, b: number): number => a - b)
    }

    return pq.length
}
