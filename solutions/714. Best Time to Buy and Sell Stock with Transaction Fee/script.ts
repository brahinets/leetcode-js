export {maxProfit}

function maxProfit(prices: number[], fee: number): number {
    let sell: number = 0
    let hold: number = 0

    for (let i: number = prices.length - 1; i >= 0; i--) {
        hold = Math.max(hold, sell - prices[i])
        sell = Math.max(sell, hold + prices[i] - fee)
    }

    return hold
}
