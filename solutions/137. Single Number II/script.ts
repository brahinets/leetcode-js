import {count} from "../../common/array-utils"

export {singleNumber}

function singleNumber(nums: number[]): number {
    const counts: Map<number, number> = count(nums)

    for (const c of counts) {
        if (c[1] === 1) {
            return c[0]
        }
    }

    throw new Error("Element not found")
}
