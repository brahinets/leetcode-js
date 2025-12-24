import {sum} from "../../common/array-utils"

export {maximumValueSum}

function maximumValueSum(nums: number[], k: number, _: number[][]): number {
    const addedValues: number[] = collectAddedValues(nums, k)

    let sumOfValues: number = sum(nums)
    for (let i: number = 0; i < Math.floor(nums.length / 2); i++) {
        const pair: number = addedValues[i * 2] + addedValues[i * 2 + 1]

        if (pair > 0) {
            sumOfValues += pair
        }
    }

    return sumOfValues
}

function collectAddedValues(nums: number[], k: number): number[] {
    const addedValue: number[] = []

    for (const num of nums) {
        addedValue.push((num ^ k) - num)
    }

    addedValue.sort((a: number, b: number): number => b - a)

    return addedValue
}
