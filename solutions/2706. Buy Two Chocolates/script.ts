export {buyChoco}

function buyChoco(prices: number[], money: number): number {
    prices.sort((a: number, b: number): number => a - b)
    const minExpense: number = prices[0] + prices[1]

    return minExpense <= money ? money - minExpense : money
}
