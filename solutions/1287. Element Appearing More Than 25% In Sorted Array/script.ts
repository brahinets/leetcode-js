import {count} from "../../common/array-utils";

export {findSpecialInteger}

function findSpecialInteger(arr: number[]): number {
    const map: Map<number, number> = count(arr)
    const threshold: number = arr.length / 4

    for (const [key, value] of map.entries()) {
        if (value > threshold) {
            return key
        }
    }

    throw new Error("No solution found")
}
