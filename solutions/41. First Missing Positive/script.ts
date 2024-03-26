import {arrayOf} from "../../common/array-factories"

export {firstMissingPositive}

function firstMissingPositive(nums: number[]): number {
    const present: boolean[] = arrayOf(false, nums.length + 1)

    for (const num of nums) {
        if (num > 0 && num <= nums.length) {
            present[num] = true
        }
    }

    for (let i: number = 1; i < present.length; i++) {
        if (!present[i]) {
            return i
        }
    }

    return nums.length + 1
}
