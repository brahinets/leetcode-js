export { minimumCost }

function minimumCost(cost: number[]): number {
    cost.sort((a: number, b: number): number => b - a)

    let total: number = 0

    for (let i: number = 0; i < cost.length; i++) {
        if ((i + 1) % 3 === 0) {
            continue
        }

        total += cost[i]
    }

    return total
}
