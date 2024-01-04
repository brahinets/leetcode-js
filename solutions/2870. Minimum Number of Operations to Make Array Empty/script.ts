import {count} from "../../common/array-utils"

export {minOperations}

function minOperations(nums: number[]): number {
    const counts: Map<number, number> = count(nums)

    let operations: number = 0
    for (const count of counts.values()) {
        if (count === 1) {
            return -1
        }

        operations += Math.ceil(count / 3)
    }

    return operations
}
