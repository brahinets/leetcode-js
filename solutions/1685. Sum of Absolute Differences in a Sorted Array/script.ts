import {sum} from "../../common/array-utils"

export {getSumAbsoluteDifferences}

function getSumAbsoluteDifferences(nums: number[]): number[] {
    const totalSum: number = sum(nums)

    const result: number[] = []
    let leftSum: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        const countBefore: number = i - 1
        const countAfter: number = nums.length - i - 1

        const rightSum: number = totalSum - leftSum
        const before: number = nums[i] * countBefore - leftSum
        const after: number = rightSum - nums[i] * countAfter

        result.push(before + after)
        leftSum += nums[i]
    }

    return result
}
