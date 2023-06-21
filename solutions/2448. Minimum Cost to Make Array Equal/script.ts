export {minCost}

function minCost(nums: number[], cost: number[]): number {
    const minimum: number = nums.reduce((min: number, e: number): number => Math.min(min, e));
    const maximum: number = nums.reduce((max: number, e: number): number => Math.max(max, e));

    if(minimum === maximum) {
        return 0;
    }

    let minCost: number = Number.MAX_SAFE_INTEGER;

    let left: number = minimum;
    let right: number = maximum;
    while (left <= right) {
        const target: number = Math.floor((left + right) / 2);

        const costOfMid: number = nums
            .reduce((result: number, e: number, index: number) => result + Math.abs(target - e) * cost[index], 0);
        const costOfMidNext: number = nums
            .reduce((result: number, e: number, index: number) => result + Math.abs(target + 1 - e) * cost[index], 0);

        minCost = Math.min(costOfMid, costOfMidNext);
        if (costOfMid > costOfMidNext) {
            left = target + 1;
        } else {
            right = target - 1;
        }
    }

    return minCost;
}
