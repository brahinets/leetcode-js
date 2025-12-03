export {countTrapezoids}

type PointPair = {
    p1: number[]
    p2: number[]
}

function countTrapezoids(points: number[][]): number {
    const n: number = points.length
    if (n < 4) {
        return 0
    }

    const slopes: Map<string, PointPair[]> = new Map<string, PointPair[]>()

    for (let i: number = 0; i < n; ++i) {
        for (let j: number = i + 1; j < n; ++j) {
            const s: string = slope(points[i], points[j])

            if (!slopes.has(s)) {
                slopes.set(s, [])
            }

            slopes.get(s)!.push({p1: points[i], p2: points[j]})
        }
    }

    let count: number = 0
    for (const pairs of slopes.values()) {
        if (pairs.length < 2) {
            continue
        }

        for (let i: number = 0; i < pairs.length; ++i) {
            for (let j: number = i + 1; j < pairs.length; ++j) {
                const {p1: a, p2: b}: PointPair = pairs[i]
                const {p1: c, p2: d}: PointPair = pairs[j]

                if (orientation(a, b, c) !== 0) {
                    count++
                }
            }
        }
    }

    return count
}

function slope(p1: number[], p2: number[]): string {
    const dy: number = p2[1] - p1[1]
    const dx: number = p2[0] - p1[0]
    if (dx === 0) {
        return 'inf'
    }
    if (dy === 0) {
        return '0'
    }

    const commonDivisor: number = gcd(dy, dx)
    let a: number = dy / commonDivisor
    let b: number = dx / commonDivisor

    if (b < 0) {
        a = -a
        b = -b
    }

    return `${a}/${b}`
}

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}

function orientation(p: number[], q: number[], r: number[]): number {
    const val: number = (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])

    if (val === 0) {
        return 0
    }

    return (val > 0) ? 1 : 2
}

