import {sum} from "../../common/array-utils"

export {maxSum}

function maxSum(nums: number[]): number {
    const positive: number[] = nums.filter((num: number): boolean => num > 0)
    const positiveUnique: Set<number> = new Set<number>(positive)

    return positiveUnique.size === 0
        ? Math.max(...nums)
        : sum([...positiveUnique])
}
