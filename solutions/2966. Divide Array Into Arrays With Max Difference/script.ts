import {last} from "../../common/array-utils"

export {divideArray}

function divideArray(nums: number[], k: number): number[][] {
    if (nums.length % 3 !== 0) {
        return []
    }

    nums = nums.sort((a: number, b: number) => a - b)

    const result: number[][] = []
    for (let i: number = 0; i < nums.length; i += 3) {
        const subArray: number[] = nums.slice(i, i + 3)

        if (elementsDifferenceValid(subArray, k)) {
            result.push(subArray)
        } else {
            return []
        }
    }

    return result
}

function elementsDifferenceValid(subArray: number[], k: number): boolean {
    return last(subArray)! - subArray[0] <= k
}
