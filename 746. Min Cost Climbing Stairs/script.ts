export {minCostClimbingStairs}

function minCostClimbingStairs(cost: number[]): number {
    const path: number[] = [];

    let position: number = cost.length;

    while (position > 1) {
        if (cost[position - 1] < cost[position - 2]) {
            position -= 1;
            path.push(cost[position]);
        } else {
            position -= 2;
            path.push(cost[position]);
        }
    }

    return path.reduce((totalCost: number, stepCost: number) => totalCost + stepCost, 0);
}
