import {arrayOf} from "../../common/array-factories"

export {maxValue}

function maxValue(n: number, index: number, maxSum: number): number {
    let nums: number[] = arrayOf(1, n)
    let sum: number = n

    while (sum < maxSum && nums[index] < maxSum - sum) {
        nums[index]++
        sum++
    }

    return nums[index]
}
