import {arrayOfZeros} from "../../common/array-factories"

export {new21Game}

function new21Game(n: number, k: number, maxPts: number): number {
    if (k === 0 || n >= k + maxPts) {
        return 1.0
    }

    const dp: number[] = arrayOfZeros(n + 1)
    dp[0] = 1.0

    let windowSum: number = 0
    for (let i: number = 1; i <= n; i++) {
        if (i <= k) {
            windowSum += dp[i - 1]
        }

        if (i > maxPts) {
            windowSum -= dp[i - maxPts - 1]
        }

        dp[i] = windowSum / maxPts
    }

    let result: number = 0
    for (let i: number = k; i <= n; i++) {
        result += dp[i]
    }

    return result
}
