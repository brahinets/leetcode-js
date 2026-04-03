export { maxWalls }

function lowerIndex(array: number[], value: number): number {
    let low: number = 0
    let high: number = array.length

    while (low < high) {
        const middle: number = (low + high) >> 1

        if (array[middle] < value) {
            low = middle + 1
        } else {
            high = middle
        }
    }

    return low
}

function upperIndex(array: number[], value: number): number {
    let low: number = 0
    let high: number = array.length

    while (low < high) {
        const middle: number = (low + high) >> 1

        if (array[middle] <= value) {
            low = middle + 1
        } else {
            high = middle
        }
    }

    return low
}

function countWallsInRange(sortedWalls: number[], lowerBound: number, upperBound: number): number {
    if (lowerBound > upperBound) {
        return 0
    }

    return upperIndex(sortedWalls, upperBound) - lowerIndex(sortedWalls, lowerBound)
}

function computeWallsDestroyedFiringLeft(
    sortedRobots: [number, number][],
    sortedWalls: number[],
    robotIndex: number
): number {
    const [position, range] = sortedRobots[robotIndex]
    const leftBlocker: number = robotIndex > 0 ? sortedRobots[robotIndex - 1][0] + 1 : -Infinity

    return countWallsInRange(sortedWalls, Math.max(position - range, leftBlocker), position)
}

function computeWallsDestroyedFiringRight(
    sortedRobots: [number, number][],
    sortedWalls: number[],
    robotIndex: number,
    numberOfRobots: number
): number {
    const [position, range] = sortedRobots[robotIndex]
    const rightBlocker: number = robotIndex < numberOfRobots - 1 ? sortedRobots[robotIndex + 1][0] - 1 : Infinity

    return countWallsInRange(sortedWalls, position, Math.min(position + range, rightBlocker))
}

function computeOverlapCount(
    sortedRobots: [number, number][],
    sortedWalls: number[],
    previousIndex: number,
    currentIndex: number
): number {
    const [previousPosition, previousRange] = sortedRobots[previousIndex]
    const [currentPosition, currentRange] = sortedRobots[currentIndex]

    const overlapLow: number = Math.max(previousPosition + 1, currentPosition - currentRange)
    const overlapHigh: number = Math.min(previousPosition + previousRange, currentPosition - 1)

    return countWallsInRange(sortedWalls, overlapLow, overlapHigh)
}

function maxWalls(robots: number[], distance: number[], walls: number[]): number {
    const numberOfRobots: number = robots.length

    const sortedRobots: [number, number][] = robots
        .map((position: number, index: number): [number, number] => [position, distance[index]])
        .sort((first: [number, number], second: [number, number]): number => first[0] - second[0])

    const sortedWalls: number[] = [...walls].sort((first: number, second: number): number => first - second)

    let dp: [number, number] = [
        computeWallsDestroyedFiringLeft(sortedRobots, sortedWalls, 0),
        computeWallsDestroyedFiringRight(sortedRobots, sortedWalls, 0, numberOfRobots)
    ]

    for (let robotIndex: number = 1; robotIndex < numberOfRobots; robotIndex++) {
        const newDp: [number, number] = [-Infinity, -Infinity]

        for (let previousDirection: number = 0; previousDirection <= 1; previousDirection++) {
            for (let currentDirection: number = 0; currentDirection <= 1; currentDirection++) {
                const wallsForCurrentRobot: number = currentDirection === 0
                    ? computeWallsDestroyedFiringLeft(sortedRobots, sortedWalls, robotIndex)
                    : computeWallsDestroyedFiringRight(sortedRobots, sortedWalls, robotIndex, numberOfRobots)

                const overlapCount: number = previousDirection === 1 && currentDirection === 0
                    ? computeOverlapCount(sortedRobots, sortedWalls, robotIndex - 1, robotIndex)
                    : 0

                const totalWalls: number = dp[previousDirection] + wallsForCurrentRobot - overlapCount
                if (totalWalls > newDp[currentDirection]) {
                    newDp[currentDirection] = totalWalls
                }
            }
        }

        dp = newDp
    }

    return Math.max(dp[0], dp[1])
}
