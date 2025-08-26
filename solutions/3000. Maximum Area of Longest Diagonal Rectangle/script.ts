export {areaOfMaxDiagonal}

function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxArea: number = 0
    let maxDiagonal: number = 0

    for (const [width, height] of dimensions) {
        const area: number = width * height
        const diagonal: number = width * width + height * height

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal
            maxArea = area
        } else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area)
        }
    }

    return maxArea
}
