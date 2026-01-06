export {maxProfit}

function maxProfit(prices: number[]): number {
    let totalProfit: number = 0

    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1]
        }
    }

    return totalProfit
}
