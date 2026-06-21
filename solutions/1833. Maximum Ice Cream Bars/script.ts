import {arrayOfZeros} from '../../common/array-factories'

export {maxIceCream}

function maxIceCream(costs: number[], coins: number): number {
    const MAX_COST: number = 100000
    const countArray: number[] = arrayOfZeros(MAX_COST + 1)

    for (const cost of costs) {
        countArray[cost]++
    }

    let totalBought: number = 0
    let remainingCoins: number = coins

    for (let price: number = 1; price <= MAX_COST && remainingCoins > 0; price++) {
        const canAfford: number = Math.min(countArray[price], Math.floor(remainingCoins / price))
        totalBought += canAfford
        remainingCoins -= canAfford * price
    }

    return totalBought
}
