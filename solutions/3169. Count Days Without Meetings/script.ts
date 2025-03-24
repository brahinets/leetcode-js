export {countDays}

function countDays(days: number, meetings: number[][]): number {
    let freeDays: number = 0
    let latestEnd: number = 0

    meetings.sort((a: number[], b: number[]): number => a[0] - b[0])

    for (let [start, end] of meetings) {
        if (start > latestEnd + 1) {
            freeDays += start - latestEnd - 1
        }

        latestEnd = Math.max(latestEnd, end)
    }

    freeDays += days - latestEnd

    return freeDays
}
