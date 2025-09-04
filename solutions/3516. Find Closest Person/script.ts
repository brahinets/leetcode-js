export {findClosest}

function findClosest(x: number, y: number, z: number): number {
    const distanceToX: number = Math.abs(z - x)
    const distanceToY: number = Math.abs(z - y)

    if (distanceToX < distanceToY) {
        return 1
    }

    if (distanceToY < distanceToX) {
        return 2
    }

    return 0
}
