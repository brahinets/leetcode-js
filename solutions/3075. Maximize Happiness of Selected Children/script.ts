export {maximumHappinessSum}

function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a: number, b: number): number => b - a)

    let happinessDecreaseBy: number = 0
    let happinessSum: number = 0
    let i: number = 0

    while (k > 0) {
        const childHappiness: number = Math.max(0, happiness[i] - happinessDecreaseBy)
        if (childHappiness === 0) {
            break
        }

        happinessSum += childHappiness
        happinessDecreaseBy++
        k--
        i++
    }

    return happinessSum
}
