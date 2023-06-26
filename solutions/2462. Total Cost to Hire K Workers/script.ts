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
        const cheapestLeft: number = Math.min(...leftPool)
        const cheapestRight: number = Math.min(...rightPool)

        if (cheapestLeft <= cheapestRight) {
            return costs.indexOf(cheapestLeft);
        } else {
            return costs.lastIndexOf(cheapestRight);
        }
    } else {
        return costs.indexOf(Math.min(...costs));
    }
}
