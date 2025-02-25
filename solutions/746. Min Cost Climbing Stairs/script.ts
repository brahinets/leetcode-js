import {arrayOfZeros} from "../../common/array-factories"

export {minCostClimbingStairs}

function minCostClimbingStairs(cost: number[]): number {
    let minCostToFloor: number[] = arrayOfZeros(cost.length + 1)

    for (let i: number = 2; i <= cost.length; i++) {
        minCostToFloor[i] = Math.min(minCostToFloor[i - 1] + cost[i - 1], minCostToFloor[i - 2] + cost[i - 2])
    }

    return minCostToFloor[cost.length]
}
