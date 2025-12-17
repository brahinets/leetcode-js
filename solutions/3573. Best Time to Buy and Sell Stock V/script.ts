import {arrayOf, matrixOf} from "../../common/array-factories"

export {maximumProfit}

function maximumProfit(prices: number[], k: number): number {
    const memo: number[][][] = arrayOf(matrixOf(-1, k + 1, 3), prices.length)

    return dfs(prices.length - 1, k, 0, memo, prices)
}

function dfs(i: number, j: number, state: number, memo: number[][][], prices: number[]): number {
    if (j === 0) {
        return 0
    }

    if (i === 0) {
        return state === 0 ? 0 : state === 1 ? -prices[0] : prices[0]
    }

    if (memo[i][j][state] !== -1) {
        return memo[i][j][state]
    }

    const p: number = prices[i]
    let res: number
    if (state === 0) {
        res = Math.max(
            dfs(i - 1, j, 0, memo, prices),
            Math.max(dfs(i - 1, j, 1, memo, prices) + p, dfs(i - 1, j, 2, memo, prices) - p),
        )
    } else if (state === 1) {
        res = Math.max(dfs(i - 1, j, 1, memo, prices), dfs(i - 1, j - 1, 0, memo, prices) - p)
    } else {
        res = Math.max(dfs(i - 1, j, 2, memo, prices), dfs(i - 1, j - 1, 0, memo, prices) + p)
    }

    memo[i][j][state] = res

    return res
}
