export {minimumBoxes}

function minimumBoxes(apple: number[], capacity: number[]): number {
    const totalApples: number = apple.reduce((sum: number, curr: number): number => sum + curr, 0)
    capacity.sort((a: number, b: number): number => b - a)

    let usedBoxes: number = 0
    let accumulatedCapacity: number = 0

    for (const cap of capacity) {
        accumulatedCapacity += cap
        usedBoxes += 1

        if (accumulatedCapacity >= totalApples) {
            return usedBoxes
        }
    }

    return usedBoxes
}
