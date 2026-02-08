export {canCompleteCircuit}

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n: number = gas.length
    let totalGas: number = 0
    let totalCost: number = 0
    let tank: number = 0
    let start: number = 0

    for (let i = 0; i < n; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
        tank += gas[i] - cost[i]

        if (tank < 0) {
            start = i + 1
            tank = 0
        }
    }

    return totalGas >= totalCost ? start : -1
}
