import { count } from "../../common/array-utils"

export { maximumLength }

function maximumLength(numbers: number[]): number {
    const frequencyMap: Map<number, number> = count(numbers)

    let maxLength: number = 1

    const onesCount: number = frequencyMap.get(1) ?? 0

    if (onesCount > 0) {
        const onesLength: number = onesCount % 2 === 1 ? onesCount : onesCount - 1
        maxLength = Math.max(maxLength, onesLength)
    }

    for (const [value] of frequencyMap) {
        if (value === 1) {
            continue
        }

        const length: number = computeChainLength(value, frequencyMap)
        maxLength = Math.max(maxLength, length)
    }

    return maxLength
}

function computeChainLength(startValue: number, frequencyMap: Map<number, number>): number {
    let pairs: number = 0
    let current: number = startValue

    while ((frequencyMap.get(current) ?? 0) >= 2) {
        const next: number = current * current

        if (next > 1_000_000_000 || (frequencyMap.get(next) ?? 0) === 0) {
            break
        }

        pairs++
        current = next
    }

    if ((frequencyMap.get(current) ?? 0) >= 1) {
        return 2 * pairs + 1
    }

    return Math.max(1, 2 * pairs - 1)
}
