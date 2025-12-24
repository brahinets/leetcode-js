import {sum} from "../../common/array-utils"

export {minSum}

function minSum(nums1: number[], nums2: number[]): number {
    const zerosInFirst: number = nums1.filter((i: number): boolean => i === 0).length
    const zerosInSecond: number = nums2.filter((i: number): boolean => i === 0).length

    const sumOfFirst: number = sum(nums1)
    const sumOfSecond: number = sum(nums2)

    const maxSumOfFirst: number = sumOfFirst + zerosInFirst
    const maxSumOfSecond: number = sumOfSecond + zerosInSecond

    if ((zerosInFirst === 0 && maxSumOfSecond > maxSumOfFirst) || (zerosInSecond === 0 && maxSumOfFirst > maxSumOfSecond)) {
        return -1
    }

    return Math.max(maxSumOfFirst, maxSumOfSecond)
}
