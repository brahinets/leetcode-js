import {arrayOfZeros} from "../../common/array-factories"

export {maximumTotalDamage}

function maximumTotalDamage(power: number[]): number {
    if (power.length === 0) {
        return 0
    }

    const powerDamages: Map<number, number> = new Map<number, number>()
    for (const spellPower of power) {
        powerDamages.set(spellPower, (powerDamages.get(spellPower) || 0) + spellPower)
    }


    const sortedUniquePowers: number[] = [...powerDamages.keys()].sort((a: number, b: number): number => a - b)
    const powerCount: number = sortedUniquePowers.length
    const maxDamage: number[] = arrayOfZeros(powerCount)

    for (let i: number = 0; i < powerCount; i++) {
        const currentPower: number = sortedUniquePowers[i]
        const damageOfCurrentPower: number = powerDamages.get(currentPower)!
        const damageWithoutCurrent: number = i > 0 ? maxDamage[i - 1] : 0

        let damageWithCurrent: number = damageOfCurrentPower
        const lastCompatibleIndex: number = findLastCompatiblePowerIndex(sortedUniquePowers, currentPower - 2)

        if (lastCompatibleIndex !== -1) {
            damageWithCurrent += maxDamage[lastCompatibleIndex]
        }

        maxDamage[i] = Math.max(damageWithoutCurrent, damageWithCurrent)
    }

    return maxDamage[powerCount - 1]
}

function findLastCompatiblePowerIndex(sortedPowers: number[], target: number): number {
    let low: number = 0
    let high: number = sortedPowers.length - 1
    let lastCompatibleIndex: number = -1

    while (low <= high) {
        const mid: number = Math.floor((low + high) / 2)

        if (sortedPowers[mid] < target) {
            lastCompatibleIndex = mid
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return lastCompatibleIndex
}
