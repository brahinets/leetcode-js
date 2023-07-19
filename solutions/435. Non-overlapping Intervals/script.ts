export {eraseOverlapIntervals}

function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 0) {
        return 0
    }

    intervals.sort((a: number[], b: number[]): number => a[1] - b[1]);

    let latestValidEnd: number = intervals[0][1];
    let intervalsToRemove: number = 0;

    for (let i: number = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start >= latestValidEnd) {
            latestValidEnd = end;
        } else {
            intervalsToRemove++;
        }
    }

    return intervalsToRemove;
}
