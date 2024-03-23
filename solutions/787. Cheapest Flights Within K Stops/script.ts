import {arrayOf} from "../../common/array-factories"

export {findCheapestPrice}

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    let minCostsToCity: number[] = arrayOf(Number.MAX_VALUE, n)
    minCostsToCity[src] = 0

    for (let stops: number = 0; stops <= k; stops++) {
        const minCostsWithStops: number[] = [...minCostsToCity]

        for (const [from, to, cost] of flights) {
            if (minCostsToCity[from] !== Number.MAX_VALUE) {
                minCostsWithStops[to] = Math.min(minCostsWithStops[to], cost + minCostsToCity[from])
            }
        }

        minCostsToCity = minCostsWithStops
    }

    return minCostsToCity[dst] === Number.MAX_VALUE ? -1 : minCostsToCity[dst]
}
