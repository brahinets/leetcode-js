import {arrayOfZeros} from "../../common/array-factories"

export {maxProfit}

function maxProfit(prices: number[], strategy: number[], k: number): number {
    const profitSum: number[] = arrayOfZeros(prices.length + 1)
    const priceSum: number[] = arrayOfZeros(prices.length + 1)
    for (let i: number = 0; i < prices.length; i++) {
        profitSum[i + 1] = profitSum[i] + prices[i] * strategy[i]
        priceSum[i + 1] = priceSum[i] + prices[i]
    }

    let res: number = profitSum[prices.length]
    for (let i: number = k - 1; i < prices.length; i++) {
        const leftProfit: number = profitSum[i - k + 1]
        const rightProfit: number = profitSum[prices.length] - profitSum[i + 1]
        const changeProfit: number = priceSum[i + 1] - priceSum[i - Math.floor(k / 2) + 1]

        res = Math.max(res, leftProfit + changeProfit + rightProfit)
    }

    return res
}
