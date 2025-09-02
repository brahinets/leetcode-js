export {numberOfPairs}

function numberOfPairs(points: number[][]): number {
    let count: number = 0

    for (let i: number = 0; i < points.length; i++) {
        const pointA: number[] = points[i]

        for (let j: number = 0; j < points.length; j++) {
            const pointB: number[] = points[j]

            if (i === j || !(pointA[0] <= pointB[0] && pointA[1] >= pointB[1])) {
                continue
            }

            if (points.length === 2) {
                count++

                continue
            }

            let illegal: boolean = false

            for (const pointTmp of points) {
                if (pointA === pointTmp || pointB === pointTmp) {
                    continue
                }

                const isXContained: boolean = pointTmp[0] >= pointA[0] && pointTmp[0] <= pointB[0]
                const isYContained: boolean = pointTmp[1] <= pointA[1] && pointTmp[1] >= pointB[1]

                illegal = isXContained && isYContained

                if (illegal) {
                    break
                }
            }

            if (!illegal) {
                count++
            }
        }
    }

    return count
}
