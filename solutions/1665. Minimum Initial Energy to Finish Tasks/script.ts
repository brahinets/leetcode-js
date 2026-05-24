export {minimumEffort}

function minimumEffort(tasks: number[][]): number {
    tasks.sort((first: number[], second: number[]): number =>
        (second[1] - second[0]) - (first[1] - first[0])
    )

    let minimumInitialEnergy: number = 0
    let prefixActualCost: number = 0

    for (const task of tasks) {
        const actualCost: number = task[0]
        const minimumRequired: number = task[1]
        minimumInitialEnergy = Math.max(minimumInitialEnergy, prefixActualCost + minimumRequired)
        prefixActualCost += actualCost
    }

    return minimumInitialEnergy
}
