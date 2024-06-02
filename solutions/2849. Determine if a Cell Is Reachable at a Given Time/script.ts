export {isReachableAtTime}

function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    const x: number = Math.abs(sx - fx)
    const y: number = Math.abs(sy - fy)
    const shortestPath: number = Math.max(x, y)

    return t >= shortestPath
}
