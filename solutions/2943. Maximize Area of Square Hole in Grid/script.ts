export {maximizeSquareHoleArea}

function maximizeSquareHoleArea(
    n: number,
    m: number,
    horizontalBars: number[],
    verticalBars: number[]
): number {
    const sortedHorizontal: number[] = sortAscending(horizontalBars)
    const sortedVertical: number[] = sortAscending(verticalBars)

    const maxConsecutiveHorizontal: number = maxConsecutiveRun(sortedHorizontal)
    const maxConsecutiveVertical: number = maxConsecutiveRun(sortedVertical)

    const sideLength: number = Math.min(maxConsecutiveHorizontal, maxConsecutiveVertical) + 1

    return sideLength * sideLength
}

function sortAscending(values: number[]): number[] {
    return values.slice().sort((a: number, b: number): number => a - b)
}

function maxConsecutiveRun(sortedPositions: number[]): number {
    if (sortedPositions.length === 0) {
        return 0
    }

    let maxRun: number = 1
    let currentRun: number = 1

    for (let i: number = 1; i < sortedPositions.length; i++) {
        if (sortedPositions[i] === sortedPositions[i - 1] + 1) {
            currentRun++
        } else {
            currentRun = 1
        }

        if (currentRun > maxRun) {
            maxRun = currentRun
        }
    }

    return maxRun
}
