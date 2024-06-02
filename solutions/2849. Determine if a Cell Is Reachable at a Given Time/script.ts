export {isReachableAtTime}

function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    const deltaX: number = Math.abs(sx - fx)
    const deltaY: number = Math.abs(sy - fy)

    if (t === 1 && deltaX === 0 && deltaY === 0) {
        return false
    }

    const shortestPath: number = Math.max(deltaX, deltaY)
    return t >= shortestPath
}
