export {buyChoco}

function buyChoco(prices: number[], money: number): number {
    const sortedPrices: number[] = prices.sort((a: number, b: number): number => a - b)
    const minExpense: number = sortedPrices[0] + sortedPrices[1]

    return minExpense <= money ? money - minExpense : money
}
