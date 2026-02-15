export { maxPoints }

function maxPoints(points: number[][]): number {
    if (points.length <= 2) {
        return points.length
    }

    let result: number = 2
    for (let i: number = 0; i < points.length; i++) {
        const slopes: Map<string, number> = new Map<string, number>()

        for (let j = 0; j < points.length; j++) {
            if (j === i) {
                continue
            }

            const dy: number = points[j][1] - points[i][1]
            const dx: number = points[j][0] - points[i][0]
            const g: number = gcd(Math.abs(dy), Math.abs(dx))
            const key: string = `${dy / g},${dx / g}`

            slopes.set(key, (slopes.get(key) ?? 0) + 1)
        }

        for (const count of slopes.values()) {
            result = Math.max(result, count + 1)
        }
    }

    return result
}

function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b)
}
