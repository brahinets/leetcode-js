export {maxTwoEvents}

function maxTwoEvents(events: number[][]): number {
    const times: number[][] = []

    for (const event of events) {
        times.push([event[0], 1, event[2]])
        times.push([event[1] + 1, 0, event[2]])
    }

    times.sort((a: number[], b: number[]): number => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])

    let result: number = 0
    let maxValue: number = 0

    for (const [, type, value] of times) {
        if (type === 1) {
            result = Math.max(result, value + maxValue)
        } else {
            maxValue = Math.max(maxValue, value)
        }
    }

    return result
}
