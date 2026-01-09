import {count} from "../../common/array-utils"

export {findMissingAndRepeatedValues}

function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let missing: number = -1
    let repeat: number = -1

    const frequencies: Map<number, number> = count(grid.flat())

    for (let num: number = 1; num <= grid.length * grid.length; num++) {
        if (!frequencies.has(num)) {
            missing = num
        } else if (frequencies.get(num) == 2) {
            repeat = num
        }
    }

    return [repeat, missing]
}
