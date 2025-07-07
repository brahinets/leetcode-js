export {maxEvents}

function maxEvents(events: number[][]): number {
    events.sort((firstDuration: number[], secondDuration: number[]): number =>
        firstDuration[0] - secondDuration[0] || firstDuration[1] - secondDuration[1]
    )

    const attended: Set<number> = new Set<number>()
    for (const [start, end] of events) {
        for (let day: number = start; day <= end; day++) {
            if (!attended.has(day)) {
                attended.add(day)

                break
            }
        }
    }

    return attended.size
}
