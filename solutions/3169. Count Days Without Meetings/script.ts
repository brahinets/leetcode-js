export {countDays}

function countDays(days: number, meetings: number[][]): number {
    const daysWithoutMeetings: Set<number> = new Set<number>(
        Array.from({length: days}, (_: number, i: number): number => i + 1)
    )

    for (const [start, end] of meetings) {
        for (let i: number = start; i <= end; i++) {
            daysWithoutMeetings.delete(i)
        }
    }

    return daysWithoutMeetings.size
}
