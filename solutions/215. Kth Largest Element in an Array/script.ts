import {count} from "../../common/array-utils"

export {findKthLargest}

function findKthLargest(nums: number[], k: number): number {
    const counts: Map<number, number> = countsByKeyDescending(nums)

    for (const [num, numCount] of counts.entries()) {
        k -= numCount

        if (k <= 0) {
            return num
        }
    }

    throw new Error("Illegal state. Not enough data")
}

function countsByKeyDescending(nums: number[]): Map<number, number> {
    return new Map([...count(nums)].toSorted((e1: number[], e2: number[]) => e2[0] - e1[0]))
}
