export { maxDistance }

function maxDistance(side: number, points: number[][], k: number): number {
    let left: number = 0
    let right: number = 2 * side
    let result: number = 0

    while (left <= right) {
        const middle: number = Math.floor((left + right) / 2)

        if (canSelectKPoints(points, k, middle)) {
            result = middle
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return result
}

function manhattan(points: number[][], firstIndex: number, secondIndex: number): number {
    return Math.abs(points[firstIndex][0] - points[secondIndex][0]) +
        Math.abs(points[firstIndex][1] - points[secondIndex][1])
}

function backtrack(points: number[][], k: number, minimumDistance: number, startIndex: number, chosen: number[]): boolean {
    if (chosen.length === k) {
        return true
    }

    for (let index = startIndex; index < points.length; index++) {
        let isValid: boolean = true

        for (const chosenIndex of chosen) {
            if (manhattan(points, index, chosenIndex) < minimumDistance) {
                isValid = false
                break
            }
        }

        if (!isValid) {
            continue
        }

        chosen.push(index)

        if (backtrack(points, k, minimumDistance, index + 1, chosen)) {
            return true
        }

        chosen.pop()
    }

    return false
}

function canSelectKPoints(points: number[][], k: number, minimumDistance: number): boolean {
    return backtrack(points, k, minimumDistance, 0, [])
}
