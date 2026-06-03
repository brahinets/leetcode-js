import { arrayOf } from "../../common/array-factories"

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

    const prefixMinWaterDuration: number[] = arrayOf(Infinity, waterCount)
    const suffixMinWaterEnd: number[] = arrayOf(Infinity, waterCount + 1)
    const prefixMinLandDuration: number[] = arrayOf(Infinity, landCount)
    const suffixMinLandEnd: number[] = arrayOf(Infinity, landCount + 1)

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
