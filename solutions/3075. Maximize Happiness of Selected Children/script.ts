export {maximumHappinessSum}

function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a: number, b: number): number => b - a)

    let moraleDecreaseBy: number = 0
    let total: number = 0
    let i: number = 0

    while (k > 0) {
        const child: number = Math.max(0, happiness[i] - moraleDecreaseBy)

        total += child
        k--
        i++
        moraleDecreaseBy++
    }

    return total
}
