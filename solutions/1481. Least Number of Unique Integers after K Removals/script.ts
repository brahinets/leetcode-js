import {count} from "../../common/array-utils"

export {findLeastNumOfUniqueInts}

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const counts: number[][] = [...count(arr).entries()]
        .sort(comparatorByFrequencyAscending)

    let result: number = 0
    for (const [, count] of counts) {
        if (count <= k) {
            k -= count
            continue
        }

        result++
    }

    return result
}

function comparatorByFrequencyAscending(
    [, firstCount]: [number, number],
    [, secondCount]: [number, number]
): number {
    return firstCount - secondCount
}

