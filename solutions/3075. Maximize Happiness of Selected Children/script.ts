export {maximumHappinessSum}

function maximumHappinessSum(happiness: number[], k: number): number {
    let total: number = 0

    while (k > 0) {
        const child: number = Math.max(...happiness)

        happiness[happiness.indexOf(child)] = 0
        for (let j: number = 0; j < happiness.length; j++) {
            happiness[j] = Math.max(happiness[j] - 1, 0)
        }

        total += child
        k--
    }

    return total
}
