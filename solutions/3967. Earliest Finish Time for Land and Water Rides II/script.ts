export { earliestFinishTime }

function earliestFinishTime(
    landStartTime: number[],
    landDuration: number[],
    waterStartTime: number[],
    waterDuration: number[],
): number {
    const landRides: [number, number][] = landStartTime.map(
        (start: number, index: number): [number, number] => [start, landDuration[index]],
    )
    const waterRides: [number, number][] = waterStartTime.map(
        (start: number, index: number): [number, number] => [start, waterDuration[index]],
    )

    landRides.sort((first: [number, number], second: [number, number]): number => first[0] - second[0])
    waterRides.sort((first: [number, number], second: [number, number]): number => first[0] - second[0])

    const landCount: number = landRides.length
    const waterCount: number = waterRides.length

    // prefixMinDuration[i] = min duration among rides 0..i (already open at or before some cutoff)
    // suffixMinEnd[i]      = min (start + duration) among rides i..count-1 (must wait for them to open)
    const prefixMinWaterDuration: number[] = new Array<number>(waterCount).fill(Infinity)
    const suffixMinWaterEnd: number[] = new Array<number>(waterCount + 1).fill(Infinity)
    const prefixMinLandDuration: number[] = new Array<number>(landCount).fill(Infinity)
    const suffixMinLandEnd: number[] = new Array<number>(landCount + 1).fill(Infinity)

    prefixMinWaterDuration[0] = waterRides[0][1]
    for (let index: number = 1; index < waterCount; index++) {
        prefixMinWaterDuration[index] = Math.min(prefixMinWaterDuration[index - 1], waterRides[index][1])
    }

    for (let index: number = waterCount - 1; index >= 0; index--) {
        suffixMinWaterEnd[index] = Math.min(suffixMinWaterEnd[index + 1], waterRides[index][0] + waterRides[index][1])
    }

    prefixMinLandDuration[0] = landRides[0][1]
    for (let index: number = 1; index < landCount; index++) {
        prefixMinLandDuration[index] = Math.min(prefixMinLandDuration[index - 1], landRides[index][1])
    }

    for (let index: number = landCount - 1; index >= 0; index--) {
        suffixMinLandEnd[index] = Math.min(suffixMinLandEnd[index + 1], landRides[index][0] + landRides[index][1])
    }

    let result: number = Infinity

    // Case 1: land first, then water
    // For each land ride: board at its opening, finish at landEnd.
    // Water rides with start <= landEnd: board at landEnd, total = landEnd + min(waterDuration)
    // Water rides with start > landEnd: board at their opening, total = min(waterStart + waterDuration)
    for (let index: number = 0; index < landCount; index++) {
        const landEnd: number = landRides[index][0] + landRides[index][1]
        const splitIndex: number = upperBound(waterRides, landEnd)

        if (splitIndex > 0) {
            result = Math.min(result, landEnd + prefixMinWaterDuration[splitIndex - 1])
        }

        if (splitIndex < waterCount) {
            result = Math.min(result, suffixMinWaterEnd[splitIndex])
        }
    }

    // Case 2: water first, then land
    for (let index: number = 0; index < waterCount; index++) {
        const waterEnd: number = waterRides[index][0] + waterRides[index][1]
        const splitIndex: number = upperBound(landRides, waterEnd)

        if (splitIndex > 0) {
            result = Math.min(result, waterEnd + prefixMinLandDuration[splitIndex - 1])
        }

        if (splitIndex < landCount) {
            result = Math.min(result, suffixMinLandEnd[splitIndex])
        }
    }

    return result
}

// Returns the number of rides with start <= cutoff (i.e., first index with start > cutoff)
function upperBound(rides: [number, number][], cutoff: number): number {
    let low: number = 0
    let high: number = rides.length

    while (low < high) {
        const mid: number = (low + high) >>> 1

        if (rides[mid][0] <= cutoff) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}
