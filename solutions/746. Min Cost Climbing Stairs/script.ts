export {minCostClimbingStairs}

function minCostClimbingStairs(cost: number[]): number {
    return minCostClimbingToStair(cost, cost.length, new Map<number, number>());
}

function minCostClimbingToStair(cost: number[], stair: number, memo: Map<number, number>): number {
    if (stair <= 1) {
        return Math.min(0, cost[0]);
    }

    let costToStair: number | undefined = memo.get(stair);
    if (costToStair !== undefined) {
        return costToStair;
    }

    const shortStep: number = minCostClimbingToStair(cost, stair - 1, memo) + cost[stair - 1];
    const bigStep: number = minCostClimbingToStair(cost, stair - 2, memo) + cost[stair - 2];
    costToStair = Math.min(shortStep, bigStep);
    memo.set(stair, costToStair);

    return costToStair;
}
