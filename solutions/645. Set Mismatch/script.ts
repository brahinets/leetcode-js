import {count} from "../../common/array-utils"

export {findErrorNums}

function findErrorNums(nums: number[]): number[] {
    const counts: Map<number, number> = count(nums)

    return [findDuplicated(counts), findMissing(nums.length, counts)]
}

function findDuplicated(counts: Map<number, number>): number {
    return [...counts.entries()]
        .find(([, count]): boolean => count > 1)![0]
}

function findMissing(totalCount: number, counts: Map<number, number>): number {
    return Array.from({length: totalCount}, (_, i) => i + 1)
        .find((num: number) => !counts.has(num))!
}
