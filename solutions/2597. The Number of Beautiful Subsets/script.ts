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
    set.sort((a: number, b: number): number => a - b)

    for (let i = 1; i < set.length; ++i) {
        if (set[i] - set[i - 1] === k) {
            return false
        }
    }

    return true
}
