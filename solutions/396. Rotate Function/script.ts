import {sum} from "../../common/array-utils"

export { maxRotateFunction }

function maxRotateFunction(nums: number[]): number {
    const length: number = nums.length
    const totalSum: number = sum(nums)

    let currentF: number = nums.reduce((accumulator: number, value: number, index: number): number => {
        return accumulator + index * value
    }, 0)

    let maximum: number = currentF

    for (let rotation: number = 1; rotation < length; rotation++) {
        currentF = currentF + totalSum - length * nums[length - rotation]!

        if (currentF > maximum) {
            maximum = currentF
        }
    }

    return maximum
}
