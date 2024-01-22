import {count} from "../../common/array-utils"

export {findErrorNums}

function findErrorNums(nums: number[]): number[] {
    const counts: Map<number, number> = count(nums)

    return [findDuplicated(counts), findMissing(nums.length, counts)]
}

function findDuplicated(counts: Map<number, number>): number {
    for (const [num, count] of counts) {
        if (count > 1) {
            return num
        }
    }

    throw new Error("No duplicated number found")
}

function findMissing(totalCount:number, counts: Map<number, number>): number {
    for (let i: number = 1; i <= totalCount; i++) {
        if (!counts.has(i)) {
            return i
        }
    }

    throw new Error("No missing number found")
}
