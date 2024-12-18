export {finalPrices}

function finalPrices(prices: number[]): number[] {
    const result: number[] = []

    for (let i: number = 0; i < prices.length; i++) {
        let discount: number = 0

        for (let j: number = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discount = prices[j]
                break
            }
        }

        result.push(prices[i] - discount)
    }

    return result
}
