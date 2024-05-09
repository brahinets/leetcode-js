export {maximumHappinessSum}

function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a: number, b: number): number => b - a)

    let moraleDecreaseBy: number = 0
    let total: number = 0
    let i: number = 0

    while (k > 0) {
        const childMorale: number = Math.max(0, happiness[i] - moraleDecreaseBy)
        if (childMorale === 0) {
            break
        }

        total += childMorale
        k--
        i++
        moraleDecreaseBy++
    }

    return total
}
