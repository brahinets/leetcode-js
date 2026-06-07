import {sum} from "../../common/array-utils"

export {countPartitions}

function countPartitions(nums: number[]): number {
    const totalSum: number = sum(nums)

    return totalSum % 2 === 0 ? nums.length - 1 : 0
}
