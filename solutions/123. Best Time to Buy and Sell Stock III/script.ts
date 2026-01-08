import {arrayOfZeros} from "../../common/array-factories"

export {maxProfit}

function maxProfit(prices: number[]): number {
    const leftProfits: number[] = arrayOfZeros(prices.length)
    const rightProfits: number[] = arrayOfZeros(prices.length)

    let minPrice: number = prices[0]
    for (let i: number = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        leftProfits[i] = Math.max(leftProfits[i - 1], prices[i] - minPrice)
    }

    let maxPrice: number = prices[prices.length - 1]
    for (let i: number = prices.length - 2; i >= 0; i--) {
        maxPrice = Math.max(maxPrice, prices[i])
        rightProfits[i] = Math.max(rightProfits[i + 1], maxPrice - prices[i])
    }

    let maxTotalProfit: number = 0
    for (let i: number = 0; i < prices.length; i++) {
        maxTotalProfit = Math.max(maxTotalProfit, leftProfits[i] + rightProfits[i])
    }

    return maxTotalProfit
}
