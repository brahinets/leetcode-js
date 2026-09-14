export {isRectangleOverlap}

function isRectangleOverlap(firstRectangle: number[], secondRectangle: number[]): boolean {
    const isOverlappingHorizontally: boolean = firstRectangle[0] < secondRectangle[2] && secondRectangle[0] < firstRectangle[2]
    const isOverlappingVertically: boolean = firstRectangle[1] < secondRectangle[3] && secondRectangle[1] < firstRectangle[3]

    return isOverlappingHorizontally && isOverlappingVertically
}
