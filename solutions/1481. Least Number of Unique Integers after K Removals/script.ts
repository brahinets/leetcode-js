import {count} from "../../common/array-utils"

export {findLeastNumOfUniqueInts}

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const counts: number[] = [...count(arr).values()]
        .sort((a: number, b: number): number => a - b)

    let result: number = 0
    for (const count of counts) {
        if (count <= k) {
            k -= count
            continue
        }

        result++
    }

    return result
}
