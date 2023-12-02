export {largestAltitude}

function largestAltitude(gains: number[]): number {
    if (gains.length === 0) {
        throw new Error("Not enough data")
    }

    let current: number = 0
    let max: number = current

    for (const gain of gains) {
        current += gain
        if (current > max) {
            max = current
        }
    }

    return max
}
