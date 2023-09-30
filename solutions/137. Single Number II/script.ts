import {count} from "../../common/array-utils"

export {singleNumber}

function singleNumber(nums: number[]): number {
    const counts: Map<number, number> = count(nums)

    for (const [number, count] of counts) {
        if (count === 1) {
            return number
        }
    }

    throw new Error("Element not found")
}
