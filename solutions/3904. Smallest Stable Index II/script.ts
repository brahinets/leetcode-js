import {arrayOfZeros} from '../../common/array-factories'

export {firstStableIndex}

function firstStableIndex(nums: number[], k: number): number {
    const prefixMaxByIndex: number[] = getPrefixMaxByIndex(nums)
    const suffixMinByIndex: number[] = getSuffixMinByIndex(nums)

    for (let index: number = 0; index < nums.length; index++) {
        if (prefixMaxByIndex[index] - suffixMinByIndex[index] <= k) {
            return index
        }
    }

    return -1
}

function getPrefixMaxByIndex(nums: number[]): number[] {
    const prefixMaxByIndex: number[] = arrayOfZeros(nums.length)

    let maximum: number = -Infinity
    for (let index: number = 0; index < nums.length; index++) {
        maximum = Math.max(maximum, nums[index])
        prefixMaxByIndex[index] = maximum
    }

    return prefixMaxByIndex
}

function getSuffixMinByIndex(nums: number[]): number[] {
    const suffixMinByIndex: number[] = arrayOfZeros(nums.length)

    let minimum: number = Infinity
    for (let index: number = nums.length - 1; index >= 0; index--) {
        minimum = Math.min(minimum, nums[index])
        suffixMinByIndex[index] = minimum
    }

    return suffixMinByIndex
}
