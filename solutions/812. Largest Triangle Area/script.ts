export {largestTriangleArea}

function largestTriangleArea(points: number[][]): number {
    let maxArea: number = 0

    for (let i: number = 0; i < points.length - 2; i++) {
        for (let j: number = i + 1; j < points.length - 1; j++) {
            for (let k: number = j + 1; k < points.length; k++) {
                const area: number = Math.abs(
                    points[i][0] * (points[j][1] - points[k][1]) +
                    points[j][0] * (points[k][1] - points[i][1]) +
                    points[k][0] * (points[i][1] - points[j][1])
                ) / 2

                maxArea = Math.max(maxArea, area)
            }
        }
    }

    return maxArea
}
