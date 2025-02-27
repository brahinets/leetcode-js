import {matrixOf} from "../../common/array-factories"

export {lenLongestFibSubseq}

function lenLongestFibSubseq(arr: number[]): number {
    const index: Map<number, number> = new Map<number, number>()
    for (let i: number = 0; i < arr.length; i++) {
        index.set(arr[i], i)
    }

    const dp: number[][] = matrixOf(2, arr.length, arr.length)

    let longest: number = 0
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            const diff: number = arr[j] - arr[i]
            if (diff < arr[i] && index.has(diff)) {
                const k: number = index.get(diff)!
                dp[i][j] = dp[k][i] + 1
                longest = Math.max(longest, dp[i][j])
            }
        }
    }

    return longest > 2 ? longest : 0
}
