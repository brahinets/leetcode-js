export {totalCost}

function totalCost(costs: number[], k: number, candidates: number): number {
    let cost: number = 0;
    let hired: number = 0;

    while (hired < k) {
        const hasPools: boolean = costs.length > candidates * 2;

        if (hasPools) {
            const leftPool: number[] = costs.slice(0, candidates);
            const rightPool: number[] = costs.slice(costs.length - candidates)
            const cheapestLeft: number = Math.min(...leftPool)
            const cheapestRight: number = Math.min(...rightPool)

            if (cheapestLeft <= cheapestRight) {
                cost += costs.splice(costs.indexOf(cheapestLeft), 1)[0];
            } else {
                cost += costs.splice(costs.lastIndexOf(cheapestRight), 1)[0];
            }
        } else {
            cost += costs.splice(costs.indexOf(Math.min(...costs)), 1)[0];
        }

        hired++;
    }

    return cost;
}
