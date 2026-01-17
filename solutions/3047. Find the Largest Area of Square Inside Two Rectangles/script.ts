export {largestSquareArea}

function largestSquareArea(bottomLeft: number[][], topRight: number[][]): number {
    let maxSide: number = 0

    for (let i: number = 0; i < bottomLeft.length; i++) {
        for (let j: number = i + 1; j < bottomLeft.length; j++) {
            const w: number = Math.min(topRight[i][0], topRight[j][0]) - Math.max(bottomLeft[i][0], bottomLeft[j][0])
            const h: number = Math.min(topRight[i][1], topRight[j][1]) - Math.max(bottomLeft[i][1], bottomLeft[j][1])

            maxSide = Math.max(maxSide, Math.min(w, h))
        }
    }

    return maxSide * maxSide
}
