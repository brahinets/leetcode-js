import {count} from "../../common/array-utils"

export {findLHS}

function findLHS(nums: number[]): number {
    const numCount: Map<number, number> = count(nums)
    let maxLength: number = 0

    for (const currentNum of numCount.keys()) {
        if (numCount.has(currentNum + 1)) {
            maxLength = Math.max(maxLength, numCount.get(currentNum)! + numCount.get(currentNum + 1)!)
        }
    }

    return maxLength
}
