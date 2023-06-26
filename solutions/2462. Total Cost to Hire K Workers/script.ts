export {totalCost}

function totalCost(costs: number[], k: number, candidates: number): number {
    let cost: number = 0;
    let hired: number = 0;

    while (hired < k) {
        const cheapestWorker: number = findCheapestWorker(costs, candidates);
        cost += costs.splice(cheapestWorker, 1)[0];
        hired++;
    }

    return cost;
}

function findCheapestWorker(costs: number[], candidates: number): number {
    const hasPools: boolean = costs.length > candidates * 2;

    if (hasPools) {
        const leftPool: number[] = costs.slice(0, candidates);
        const rightPool: number[] = costs.slice(costs.length - candidates)
        const cheapestLeftIndex: number = findIndexOfMin(leftPool)
        const cheapestRightIndex: number = findIndexOfMin(rightPool)

        if (costs[cheapestLeftIndex] <= costs[costs.length - candidates + cheapestRightIndex]) {
            return cheapestLeftIndex;
        } else {
            return costs.length - candidates + cheapestRightIndex;
        }
    } else {
        return findIndexOfMin(costs);
    }
}

function findIndexOfMin(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Not enough data");
    }

    let min: number = nums[0];
    let indexOfMin: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            indexOfMin = i;
        }
    }

    return indexOfMin;
}
