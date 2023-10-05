import {count} from "../../common/array-utils"

export {majorityElement}

function majorityElement(nums: number[]): number[] {
    const counts: Map<number, number> = count(nums)
    const majority: number = nums.length / 3
    const majorityNums: number[] = []

    for (const [num, count] of counts) {
        if (count > majority) {
            majorityNums.push(num)
        }
    }

    return majorityNums
}
