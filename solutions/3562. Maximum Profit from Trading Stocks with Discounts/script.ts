import {arrayOf, arrayOfZeros} from "../../common/array-factories"

export {maxProfit}

function maxProfit(
    n: number,
    present: number[],
    future: number[],
    hierarchy: number[][],
    budget: number,
): number {
    const g: number[][] = arrayOf([], n)
    for (const e of hierarchy) {
        g[e[0] - 1].push(e[1] - 1)
    }

    const [resultDp] = dfs(present, future, budget, g, 0)

    return resultDp[budget]
}

function dfs(present: number[], future: number[], budget: number, g: number[][], u: number): readonly [number[], number[], number] {
    const cost: number = present[u]
    const dCost: number = Math.floor(present[u] / 2)

    const dp0: number[] = arrayOfZeros(budget + 1)
    const dp1: number[] = arrayOfZeros(budget + 1)

    let subProfit0: number[] = arrayOfZeros(budget + 1)
    let subProfit1: number[] = arrayOfZeros(budget + 1)

    let uSize: number = cost

    for (const v of g[u]) {
        const [childDp0, childDp1, vSize] = dfs(present, future, budget, g, v)
        uSize += vSize
        const nextSubProfit0: number[] = arrayOfZeros(budget + 1)
        const nextSubProfit1: number[] = arrayOfZeros(budget + 1)

        for (let i: number = 0; i <= budget; i++) {
            for (let sub: number = 0; sub <= Math.min(vSize, i); sub++) {
                nextSubProfit0[i] = Math.max(
                    nextSubProfit0[i],
                    subProfit0[i - sub] + childDp0[sub],
                )
                nextSubProfit1[i] = Math.max(
                    nextSubProfit1[i],
                    subProfit1[i - sub] + childDp1[sub],
                )
            }
        }
        subProfit0 = nextSubProfit0
        subProfit1 = nextSubProfit1
    }

    for (let i: number = 0; i <= budget; i++) {
        dp0[i] = subProfit0[i]
        dp1[i] = subProfit0[i]

        if (i >= cost) {
            dp0[i] = Math.max(dp0[i], subProfit1[i - cost] + future[u] - cost,)
        }

        if (i >= dCost) {
            dp1[i] = Math.max(dp1[i], subProfit1[i - dCost] + future[u] - dCost,)
        }
    }

    return [dp0, dp1, uSize]
}


