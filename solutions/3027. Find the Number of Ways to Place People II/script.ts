export {numberOfPairs}

function numberOfPairs(points: number[][]): number {
    let validPairCount: number = 0

    for (let i: number = 0; i < points.length; i++) {
        for (let j: number = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }

            const upperLeft: [number, number] = [points[i][0], points[i][1]]
            const lowerRight: [number, number] = [points[j][0], points[j][1]]

            if (isValidUpperLeftToLowerRightPair(upperLeft, lowerRight)) {
                if (hasNoPointsInRectangle(points, upperLeft, lowerRight, i, j)) {
                    validPairCount++
                }
            }
        }
    }

    return validPairCount
}

function isValidUpperLeftToLowerRightPair(upperLeft: [number, number], lowerRight: [number, number]): boolean {
    return upperLeft[0] <= lowerRight[0] && upperLeft[1] >= lowerRight[1]
}

function isPointInRectangle(currentPoint: [number, number], upperLeft: [number, number], lowerRight: [number, number]): boolean {
    const [x, y] = currentPoint
    const [leftX, topY] = upperLeft
    const [rightX, bottomY] = lowerRight

    const isWithinXBounds: boolean = x >= leftX && x <= rightX
    const isWithinYBounds: boolean = y <= topY && y >= bottomY

    return isWithinXBounds && isWithinYBounds
}

function hasNoPointsInRectangle(points: number[][], upperLeft: [number, number], lowerRight: [number, number], i: number, j: number): boolean {
    for (let k: number = 0; k < points.length; k++) {
        if (k === i || k === j) {
            continue
        }

        const currentPoint: [number, number] = [points[k][0], points[k][1]]
        if (isPointInRectangle(currentPoint, upperLeft, lowerRight)) {
            return false
        }
    }

    return true
}
