import {binarySearch} from "../../common/array-utils"

export {minOperations}

function minOperations(nums: number[]): number {
    let result: number = nums.length

    const unique: Set<number> = new Set<number>(nums)
    const sortedUnique: number[] = Array.from(unique).sort((a: number, b: number): number => a - b)

    for (let i: number = 0; i < sortedUnique.length; i++) {
        const left: number = sortedUnique[i]
        const right: number = left + nums.length - 1

        const j: number = binarySearch(sortedUnique, right)
        const count: number = j - i

        result = Math.min(result, nums.length - count)
    }

    return result
}
