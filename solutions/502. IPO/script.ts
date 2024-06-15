export {findMaximizedCapital}

function findMaximizedCapital(
    numProjects: number,
    initialCapital: number,
    profits: number[],
    capital: number[]
): number {
    let result: number = initialCapital

    while (numProjects > 0 && capital.length > 0) {
        let maxProfit: number = -1
        let canAffordAll: boolean = numProjects >= capital.length

        for (let i = 0; i < capital.length; i++) {
            if (capital[i] <= result) {
                if (maxProfit === -1) {
                    maxProfit = i
                }

                if (profits[i] > profits[maxProfit]) {
                    maxProfit = i
                }
            } else {
                canAffordAll = false
            }
        }

        if (maxProfit === -1) {
            break
        }

        if (canAffordAll) {
            for (let i: number = 0; i < capital.length; i++) {
                result += profits[i]
            }

            return result
        }

        result += profits[maxProfit]
        capital.splice(maxProfit, 1)
        profits.splice(maxProfit, 1)
        numProjects--
    }

    return result
}
