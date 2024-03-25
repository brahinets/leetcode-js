import {count} from "../../common/array-utils"

export {findDuplicates}

function findDuplicates(nums: number[]): number[] {
    return [...count(nums).entries()]
        .filter(([, count]: number[]): boolean => count > 1)
        .map(([value,]: number[]): number => value)
        .sort((a: number, b: number): number => a - b)
}
