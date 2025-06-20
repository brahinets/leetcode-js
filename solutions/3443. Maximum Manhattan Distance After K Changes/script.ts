export {maxDistance}

function maxDistance(directions: string, k: number): number {
    let maxDist: number = 0
    let northCount: number = 0
    let southCount: number = 0
    let eastCount: number = 0
    let westCount: number = 0

    for (const dir of directions) {
        switch (dir) {
            case "N":
                northCount++
                break
            case "S":
                southCount++
                break
            case "E":
                eastCount++
                break
            case "W":
                westCount++
                break
        }

        const verticalChanges: number = Math.min(northCount, southCount, k)
        const horizontalChanges: number = Math.min(eastCount, westCount, k - verticalChanges)

        const distance: number =
            manhattanComponent(northCount, southCount, verticalChanges) +
            manhattanComponent(eastCount, westCount, horizontalChanges)

        maxDist = Math.max(maxDist, distance)
    }

    return maxDist
}

function manhattanComponent(count1: number, count2: number, changes: number): number {
    return Math.abs(count1 - count2) + changes * 2
}
