import {subsets} from "../78. Subsets/script"

export {beautifulSubsets}

function beautifulSubsets(nums: number[], k: number): number {
    let result: number = 0

    for (const subset of subsets(nums)) {
        if (subset.length && isBeautiful(subset, k)) {
            result++
        }
    }

    return result
}

function isBeautiful(set: number[], k: number): boolean {
    const seen = new Set<number>()

    for (const num of set) {
        if (seen.has(num - k) || seen.has(num + k)) {
            return false
        }

        seen.add(num)
    }

    return true
}
