export {eraseOverlapIntervals}

function eraseOverlapIntervals(intervals: number[][]): number {
    const nonOverlappedIntervals: number[][][] = unoverlapIntervals(intervals);
    return intervals.length - Math.max(...nonOverlappedIntervals.map((interval: number[][]): number => interval.length))
}

function unoverlapIntervals(intervals: number[][]): number[][][] {
    const result: number[][][] = [];

    intervals.sort((a: number[], b: number[]): number => a[1] - b[1])

    const overlapped: number[] = findOverlaps(intervals);
    if (overlapped.length === 0) {
        result.push(intervals);
    } else {
        for (const o of overlapped) {
            result.push(...unoverlapIntervals([...intervals.slice(0, o), ...intervals.slice(o + 1)]));
        }
    }

    return result;
}

function findOverlaps(intervals: number[][]): number[] {
    const overlaps: number[] = [];

    if (intervals.length === 1) {
        return overlaps;
    }

    for (let i: number = 0; i < intervals.length - 1; i++) {
        if (overlap(intervals[i], intervals[i + 1])) {
            overlaps.push(i, i + 1)
        }
    }

    return overlaps;

}

function overlap(a: number[], b: number[]) {
    return (a[1] > b[0] && a[0] < b[1]) || (b[1] > a[0] && b[0] < a[1]);
}
