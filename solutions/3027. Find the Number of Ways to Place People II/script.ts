export {numberOfPairs}

function numberOfPairs(points: number[][]): number {
    points.sort((a: number[], b: number[]): number => a[0] - b[0] || b[1] - a[1])

    let result: number = 0
    for (let i: number = 0; i < points.length - 1; i++) {
        const pointA: number[] = points[i]
        const xRange: number[] = [pointA[0] - 1, Infinity]
        const yRange: number[] = [-Infinity, pointA[1] + 1]

        for (let j = i + 1; j < points.length; j++) {
            const pointB = points[j]

            if (pointB[0] > xRange[0] && pointB[0] < xRange[1] && pointB[1] > yRange[0] && pointB[1] < yRange[1]) {
                result++

                xRange[0] = pointB[0]
                yRange[0] = pointB[1]
            }
        }
    }

    return result
}
