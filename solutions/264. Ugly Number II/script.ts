import {arrayOfZeros} from "../../common/array-factories"

export {nthUglyNumber}

function nthUglyNumber(n: number): number {
    const dp: number[] = arrayOfZeros(n)
    dp[0] = 1

    let p2: number = 0
    let p3: number = 0
    let p5: number = 0

    for (let i: number = 1; i < n; i++) {
        dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)

        if (dp[i] === dp[p2] * 2) {
            p2++
        }

        if (dp[i] === dp[p3] * 3) {
            p3++
        }

        if (dp[i] === dp[p5] * 5) {
            p5++
        }
    }

    return dp[n - 1]
}
