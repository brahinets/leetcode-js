import {sum} from "../../common/array-utils"

export {missingNumber}

function missingNumber(nums: number[]): number {
    const required: number = nums.length

    const actualSum: number = sum(nums)
    const expectedSum: number = ((required * required) + required) / 2

    return expectedSum - actualSum
}
