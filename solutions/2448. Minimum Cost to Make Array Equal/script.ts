export {minCost}

function minCost(nums: number[], cost: number[]): number {
    let minCost: number = Number.MAX_SAFE_INTEGER;
    let left: number = Math.min(...nums);
    let right: number = Math.max(...nums);

    while (left <= right) {
        const target: number = Math.floor((left + right) / 2);
        const costOfMid: number = calculateCost(nums, cost, target);
        const costOfMidNext: number = calculateCost(nums, cost, target + 1);

        minCost = Math.min(costOfMid, costOfMidNext);
        if (costOfMid > costOfMidNext) {
            left = target + 1;
        } else {
            right = target - 1;
        }
    }

    return minCost;
}

function calculateCost(nums: number[], cost: number[], target: number) {
    return nums.reduce((result: number, e: number, index: number) =>
            result + Math.abs(target - e) * cost[index],
        0
    );
}
