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
        const cheapestLeftIndex: number = findIndexOfMin(costs, 0, candidates)
        const cheapestRightIndex: number = findIndexOfMin(costs, costs.length - candidates, costs.length)

        if (costs[cheapestLeftIndex] <= costs[cheapestRightIndex]) {
            return cheapestLeftIndex;
        } else {
            return cheapestRightIndex;
        }
    } else {
        return findIndexOfMin(costs, 0, costs.length);
    }
}

function findIndexOfMin(nums: number[], minIndex: number, maxIndex: number): number {
    if (nums.length === 0) {
        throw new Error("Not enough data");
    }

    let min: number = nums[minIndex];
    let indexOfMin: number = minIndex;
    for (let i: number = minIndex; i < nums.length && i < maxIndex; i++) {
        if (nums[i] < min) {
            min = nums[i];
            indexOfMin = i;
        }
    }

    return indexOfMin;
}
