export {change}

function change(amount: number, coins: number[]): number {
    const combinations: number[][] = []

    collectCombinations(amount, coins, [], combinations)

    return new Set(combinations.map(c => c.sort().join("_"))).size
}

function collectCombinations(amount: number, coins: number[], currentCombination: number[], combinations: number[][]): void {
    if (amount === 0) {
        combinations.push(currentCombination)
        return
    }

    for (const coin of coins) {
        if (amount === coin) {
            combinations.push([...currentCombination, coin])
        } else {
            if (coin <= amount) {
                collectCombinations(amount - coin, coins, [...currentCombination, coin], combinations)
            }
        }
    }
}
