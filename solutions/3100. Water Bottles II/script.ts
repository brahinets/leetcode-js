export {maxBottlesDrunk}

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let drunk: number = numBottles
    let empty: number = numBottles

    while (empty >= numExchange) {
        drunk++

        empty -= numExchange - 1

        numExchange++
    }

    return drunk
}
