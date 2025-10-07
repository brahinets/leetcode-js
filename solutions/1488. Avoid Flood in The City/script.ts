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
        } else {
            if (lakeMap.has(lake)) {
                let found: boolean = false

                for (let j: number = 0; j < dryDays.length; j++) {
                    if (dryDays[j] > lakeMap.get(lake)!) {
                        result[dryDays[j]] = lake
                        dryDays.splice(j, 1)
                        found = true

                        break
                    }
                }

                if (!found) {
                    return []
                }
            }

            lakeMap.set(lake, i)

            result.push(-1)
        }
    }

    return result
}
