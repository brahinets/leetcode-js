import {subsets} from "../78. Subsets/script"

export {subsetXORSum}

function subsetXORSum(nums: number[]): number {
    let result: number = 0

    for (const subset of subsets(nums)) {
        result += subset.reduce((xor: number, val: number): number => xor ^ val, 0)
    }

    return result
}
