export { maxDistance }

function toPerimeterPosition(x: number, y: number, side: number): number {
    if (y === 0) {
        return x
    }

    if (x === side) {
        return side + y
    }

    if (y === side) {
        return 2 * side + (side - x)
    }

    return 3 * side + (side - y)
}

function extendedPosition(positions: readonly number[], index: number, circumference: number): number {
    const length = positions.length

    return index < length ? positions[index]! : positions[index - length]! + circumference
}

function firstIndexAtLeast(
    positions: readonly number[],
    target: number,
    low: number,
    high: number,
    circumference: number,
): number {
    let left = low
    let right = high

    while (left < right) {
        const middle = Math.floor((left + right) / 2)

        if (extendedPosition(positions, middle, circumference) >= target) {
            right = middle
        } else {
            left = middle + 1
        }
    }

    return left
}

function canSelectKPoints(
    positions: readonly number[],
    k: number,
    minimumDistance: number,
    circumference: number,
): boolean {
    const length = positions.length

    for (let startIndex = 0; startIndex < length; startIndex++) {
        let currentIndex = startIndex
        let isValid = true

        for (let count = 1; count < k; count++) {
            const target = extendedPosition(positions, currentIndex, circumference) + minimumDistance
            const nextIndex = firstIndexAtLeast(positions, target, currentIndex + 1, startIndex + length, circumference)

            if (nextIndex >= startIndex + length) {
                isValid = false
                break
            }

            currentIndex = nextIndex
        }

        if (isValid &&
            extendedPosition(positions, currentIndex, circumference) + minimumDistance <= positions[startIndex]! + circumference) {
            return true
        }
    }

    return false
}

function maxDistance(side: number, points: number[][], k: number): number {
    const circumference = 4 * side
    const positions: number[] = points.map(([x, y]: number[]): number => toPerimeterPosition(x!, y!, side))
    positions.sort((first: number, second: number): number => first - second)

    let left = 0
    let right = 2 * side
    let result = 0

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (canSelectKPoints(positions, k, middle, circumference)) {
            result = middle
            left = middle + 1
        } else {
            right = middle - 1
        }
    }

    return result
}
