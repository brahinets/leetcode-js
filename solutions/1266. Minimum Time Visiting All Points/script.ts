export {minTimeToVisitAllPoints}

function minTimeToVisitAllPoints(points: number[][]): number {
    let time: number = 0
    let current: number[] = points[0]

    for (let i: number = 1; i < points.length; i++) {
        const next: number[] = points[i]
        time += getTime(current, next)
        current = next
    }

    return time
}

function getTime(pointA: number[], pointB: number[]): number {
    const xDiff: number = Math.abs(pointA[0] - pointB[0])
    const yDiff: number = Math.abs(pointA[1] - pointB[1])

    return Math.max(xDiff, yDiff)
}
