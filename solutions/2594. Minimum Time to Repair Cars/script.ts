export {repairCars}

function repairCars(ranks: number[], cars: number): number {
    let low: number = 1
    let high: number = ranks[0] * cars * cars

    while (low < high) {
        const mid: number = Math.floor((low + high) / 2)
        let carsRepaired: number = 0

        for (let rank of ranks) {
            carsRepaired += Math.floor(Math.sqrt(mid / rank))
        }

        if (carsRepaired < cars) {
            low = mid + 1
        } else {
            high = mid
        }
    }

    return low
}
