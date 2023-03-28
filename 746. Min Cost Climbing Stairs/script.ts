export {minCostClimbingStairs}

function minCostClimbingStairs(cost: number[]): number {
    return minCostClimbingToStair(cost, cost.length);
}

function minCostClimbingToStair(cost: number[], stair: number): number {
    if (stair <= 1) {
        return Math.min(0, cost[0]);
    }

    const shortStep: number = minCostClimbingToStair(cost, stair - 1) + cost[stair - 1];
    const bigStep: number = minCostClimbingToStair(cost, stair - 2) + cost[stair - 2];

    return Math.min(shortStep, bigStep);
}
