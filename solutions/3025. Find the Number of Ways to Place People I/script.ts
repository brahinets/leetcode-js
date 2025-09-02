export {numberOfPairs}

type Point = [number, number]

function numberOfPairs(points: number[][]): number {
    let validPairCount: number = 0

    for (let i: number = 0; i < points.length; i++) {
        for (let j: number = 0; j < points.length; j++) {
            if (i === j) {
                continue
            }

            const upperLeft: Point = [points[i][0], points[i][1]]
            const lowerRight: Point = [points[j][0], points[j][1]]

            if (isValidUpperLeftToLowerRightPair(upperLeft, lowerRight)) {
                if (hasNoPointsInRectangle(points, upperLeft, lowerRight, i, j)) {
                    validPairCount++
                }
            }
        }
    }

    return validPairCount
}

function isValidUpperLeftToLowerRightPair(upperLeft: Point, lowerRight: Point): boolean {
    return upperLeft[0] <= lowerRight[0] && upperLeft[1] >= lowerRight[1]
}

function hasNoPointsInRectangle(
    points: number[][],
    upperLeft: Point,
    lowerRight: Point,
    excludeIndexA: number,
    excludeIndexB: number
): boolean {
    for (let k: number = 0; k < points.length; k++) {
        if (k === excludeIndexA || k === excludeIndexB) {
            continue
        }

        const currentPoint: Point = [points[k][0], points[k][1]]
        if (isPointInRectangle(currentPoint, upperLeft, lowerRight)) {
            return false
        }
    }

    return true
}

function isPointInRectangle(point: Point, upperLeft: Point, lowerRight: Point): boolean {
    const [x, y] = point
    const [leftX, topY] = upperLeft
    const [rightX, bottomY] = lowerRight

    const isWithinXBounds: boolean = x >= leftX && x <= rightX
    const isWithinYBounds: boolean = y <= topY && y >= bottomY

    return isWithinXBounds && isWithinYBounds
}
