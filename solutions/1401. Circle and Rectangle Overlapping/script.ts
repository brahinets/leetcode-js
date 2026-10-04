export { checkOverlap }

function checkOverlap(
    radius: number,
    xCenter: number,
    yCenter: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): boolean {
    const closestX: number = clamp(xCenter, x1, x2)
    const closestY: number = clamp(yCenter, y1, y2)

    const distanceX: number = xCenter - closestX
    const distanceY: number = yCenter - closestY

    return distanceX * distanceX + distanceY * distanceY <= radius * radius
}

function clamp(value: number, minimum: number, maximum: number): number {
    return Math.max(minimum, Math.min(value, maximum))
}
