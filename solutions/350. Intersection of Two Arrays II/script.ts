import {count} from "../../common/array-utils"
import {arrayOf} from "../../common/array-factories"

export {intersect}

function intersect(nums1: number[], nums2: number[]): number[] {
    const first: Map<number, number> = count(nums1)
    const second: Map<number, number> = count(nums2)

    const result: number[] = []
    for (const [num, count] of first) {
        if (second.has(num)) {
            result.push(...arrayOf(num, Math.min(count, second.get(num)!)))
        }
    }

    return result
}
