export {avoidFlood}

function avoidFlood(rains: number[]): number[] {
    const result: number[] = []
    const lakeMap: Map<number, number> = new Map<number, number>()
    const dryDays: number[] = []

    for (let i: number = 0; i < rains.length; i++) {
        const lake: number = rains[i]

        if (lake === 0) {
            dryDays.push(i)
            result.push(1)
            continue
        }

        if (lakeMap.has(lake)) {
            const dryDayIdx: number = findDryDay(dryDays, lakeMap.get(lake)!)
            if (dryDayIdx === -1) {
                return []
            }

            result[dryDays[dryDayIdx]] = lake

            dryDays.splice(dryDayIdx, 1)
        }

        lakeMap.set(lake, i)
        result.push(-1)
    }

    return result
}

function findDryDay(dryDays: number[], lastRainDay: number): number {
    for (let j: number = 0; j < dryDays.length; j++) {
        if (dryDays[j] > lastRainDay) {
            return j
        }
    }

    return -1
}
