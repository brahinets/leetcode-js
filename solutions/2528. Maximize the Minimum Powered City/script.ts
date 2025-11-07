import {arrayOfZeros} from "../../common/array-factories"

export {maxPower}

function maxPower(stations: number[], radius: number, maxAdditions: number): number {
    const powerDiff: number[] = buildPowerDiff(stations, radius)
    const minPower: number = Math.min(...stations)
    const maxPowerPossible: number = stations.reduce((a: number, b: number): number => a + b, 0) + maxAdditions
    let answer: number = 0
    let lo: number = minPower
    let hi: number = maxPowerPossible

    while (lo <= hi) {
        const midPower: number = Math.floor(lo + (hi - lo) / 2)

        if (canAchieve(midPower, powerDiff, radius, maxAdditions)) {
            answer = midPower
            lo = midPower + 1
        } else {
            hi = midPower - 1
        }
    }

    return answer
}

function buildPowerDiff(stations: number[], radius: number): number[] {
    const stationCount: number = stations.length
    const powerDiff: number[] = arrayOfZeros(stationCount + 1)

    for (let i: number = 0; i < stationCount; i++) {
        const left: number = Math.max(0, i - radius)
        const right: number = Math.min(stationCount, i + radius + 1)

        powerDiff[left] += stations[i]
        powerDiff[right] -= stations[i]
    }

    return powerDiff
}

function canAchieve(targetPower: number, powerDiff: number[], radius: number, maxAdditions: number): boolean {
    const stationCount: number = powerDiff.length - 1
    const currentDiff: number[] = [...powerDiff]
    let currentPower: number = 0
    let additionsLeft: number = maxAdditions

    for (let i: number = 0; i < stationCount; i++) {
        currentPower += currentDiff[i]

        if (currentPower < targetPower) {
            const needed: number = targetPower - currentPower

            if (additionsLeft < needed) {
                return false
            }

            additionsLeft -= needed

            const end: number = Math.min(stationCount, i + 2 * radius + 1)
            currentDiff[end] -= needed
            currentPower += needed
        }
    }

    return true
}
