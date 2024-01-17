import {count} from "../../common/array-utils"

export {uniqueOccurrences}

function uniqueOccurrences(arr: number[]): boolean {
    const counts: Map<number, number> = count(arr)

    const uniqueCountsNumber: number = new Set(counts.values()).size
    const totalCountsNumber: number = [...counts.values()].length

    return totalCountsNumber === uniqueCountsNumber
}
