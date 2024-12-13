import {arrayOf} from "../../common/array-factories"

export {findScore}

function findScore(nums: number[]): number {
    const marked: boolean[] = arrayOf(false, nums.length)
    const sorted: [number, number][] = sortWithIndices(nums)

    let result: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        const number: number = sorted[i][0]
        const index: number = sorted[i][1]

        if (!marked[index]) {
            result += number
            marked[index] = true

            if (index - 1 >= 0) {
                marked[index - 1] = true
            }
            if (index + 1 < nums.length) {
                marked[index + 1] = true
            }
        }
    }

    return result
}

function sortWithIndices(nums: number[]): [number, number][] {
    const sorted: [number, number][] = []

    for (let i: number = 0; i < nums.length; i++) {
        sorted.push([nums[i], i])
    }

    sorted.sort((a: [number, number], b: [number, number]): number => a[0] - b[0])

    return sorted
}
