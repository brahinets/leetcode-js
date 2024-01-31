import {last} from "../../common/array-utils";

export {sumSubarrayMins}

const mod: number = 1e9 + 7

function sumSubarrayMins(arr: number[]): number {
    let sum: number = 0

    const increasingIndices: number[] = [-1]
    arr.push(-Infinity)

    for (let i: number = 0; i < arr.length; i++) {
        while (arr[i] < arr[last(increasingIndices)!]) {
            const j: number = increasingIndices.pop()!
            const k: number = last(increasingIndices)!

            const numberOfSubArraysWithSuchMin: number = (i - j) * (j - k)
            sum += arr[j] * numberOfSubArraysWithSuchMin
            sum %= mod
        }

        increasingIndices.push(i)
    }

    return sum
}
