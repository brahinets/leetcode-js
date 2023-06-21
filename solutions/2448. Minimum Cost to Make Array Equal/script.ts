export {minCost}

function minCost(nums: number[], cost: number[]): number {
    const minimum: number = nums.reduce((min: number, e: number): number => Math.min(min, e));
    const maximum: number = nums.reduce((max: number, e: number): number => Math.max(max, e));

    let minCost: number = Number.MAX_SAFE_INTEGER;
    for (let target: number = minimum; target <= maximum; target++) {
        const costOf: number = nums
            .reduce((result: number, e: number, index: number) => result + Math.abs(target - e) * cost[index], 0);

        if (costOf < minCost) {
            minCost = costOf;
        }
    }

    return minCost;
}
