import {arrayOf, matrixOf} from "../../common/array-factories"

export {numOfArrays}

const MOD: number = 10 ** 9 + 7

function numOfArrays(n: number, m: number, k: number): number {
    let dp: number[][][] = arrayOf(matrixOf(0, k, m), n)
    dp[0][0].fill(1)

    for (let i: number = 1; i < n; i++) {
        for (let cost: number = 0; cost < Math.min(i + 1, k); cost++) {
            for (let max: number = 0; max < m; max++) {
                dp[i][cost][max] = (dp[i][cost][max] + (max + 1) * dp[i - 1][cost][max]) % MOD

                if (cost != 0) {
                    let sum: number = 0

                    for (let prevMax: number = 0; prevMax < max; prevMax++) {
                        sum += dp[i - 1][cost - 1][prevMax]
                        sum %= MOD
                    }

                    dp[i][cost][max] = (dp[i][cost][max] + sum) % MOD
                }
            }
        }
    }

    let result: number = 0
    for (let max: number = 0; max < m; max++) {
        result += dp[n - 1][k - 1][max]
        result %= MOD
    }

    return result
}
