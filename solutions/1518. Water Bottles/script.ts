export {numWaterBottles}

function numWaterBottles(numBottles: number, numExchange: number): number {
    let consumed: number = 0

    while (numBottles >= numExchange) {
        const exchanged: number = Math.floor(numBottles / numExchange)

        consumed += numExchange * exchanged
        numBottles -= numExchange * exchanged

        numBottles += exchanged
    }

    return consumed + numBottles
}
