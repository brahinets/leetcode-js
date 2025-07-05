import {count} from "../../common/array-utils"

export {findLucky}

function findLucky(arr: number[]): number {
    const counts: Map<number, number> = count(arr)

    let lucky: number = -1
    for (const [num, count] of counts) {
        if (num === count && count > lucky) {
            lucky = count
        }
    }

    return lucky
}
