import {count} from "../../common/array-utils"

export {specialTriplets}

const MOD: number = 1e9 + 7

function specialTriplets(nums: number[]): number {
    const totalCount: Map<number, number> = count(nums)
    const seenCount: Map<number, number> = new Map<number, number>()
    let result: number = 0

    for (const num of nums) {
        const doubleNum: number = num * 2
        const leftCount: number = seenCount.get(doubleNum) ?? 0

        seenCount.set(num, (seenCount.get(num) ?? 0) + 1)

        const rightCount: number = (totalCount.get(doubleNum) ?? 0) - (seenCount.get(doubleNum) ?? 0)

        result = (result + (leftCount * rightCount) % MOD) % MOD
    }

    return result
}
