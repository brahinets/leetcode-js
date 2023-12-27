export {minCost}

function minCost(colors: string, neededTime: number[]): number {
    let result: number = 0

    let mostExpensiveInGroup: number = 0
    let fullGroupRemovalTime: number = 0
    for (let i: number = 0; i < colors.length; i++) {
        if (i > 0 && colors[i] !== colors[i - 1]) {
            result += (fullGroupRemovalTime - mostExpensiveInGroup)
            mostExpensiveInGroup = 0
            fullGroupRemovalTime = 0
        }

        fullGroupRemovalTime += neededTime[i]
        mostExpensiveInGroup = Math.max(mostExpensiveInGroup, neededTime[i])
    }

    result += fullGroupRemovalTime - mostExpensiveInGroup

    return result
}
