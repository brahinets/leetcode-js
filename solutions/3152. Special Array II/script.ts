import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {isArraySpecial}

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const maxReach: number[] = arrayOfZeros(nums.length)
    let end: number = 0

    for (let start: number = 0; start < nums.length; start++) {
        end = Math.max(end, start)
        while (end < nums.length - 1 && nums[end] % 2 !== nums[end + 1] % 2) {
            end++
        }
        maxReach[start] = end
    }

    const result: boolean[] = arrayOf(false, queries.length)
    for (let i: number = 0; i < queries.length; i++) {
        const [start, endQuery]: number[] = queries[i]
        result[i] = endQuery <= maxReach[start]
    }

    return result
}
