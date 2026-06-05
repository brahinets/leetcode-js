import { arrayOf } from "../../common/array-factories"

export { maxJumps }

function maxJumps(arr: number[], d: number): number {
    const length: number = arr.length
    const memo: number[] = arrayOf(-1, length)

    let result: number = 0

    for (let index: number = 0; index < length; index++) {
        result = Math.max(result, dp(arr, d, memo, index))
    }

    return result
}

function dp(arr: number[], d: number, memo: number[], index: number): number {
    if (memo[index] !== -1) {
        return memo[index]
    }

    let best: number = 1

    for (let step: number = 1; step <= d; step++) {
        const right: number = index + step

        if (right >= arr.length || arr[right] >= arr[index]) {
            break
        }

        best = Math.max(best, 1 + dp(arr, d, memo, right))
    }

    for (let step: number = 1; step <= d; step++) {
        const left: number = index - step

        if (left < 0 || arr[left] >= arr[index]) {
            break
        }

        best = Math.max(best, 1 + dp(arr, d, memo, left))
    }

    memo[index] = best

    return best
}
