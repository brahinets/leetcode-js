export {maxRunTime}

function maxRunTime(n: number, batteries: number[]): number {
    let left: number = 1
    let right: number = Math.floor(batteries.reduce((a: number, b: number): number => a + b, 0) / n)

    while (left < right) {
        const mid: number = Math.ceil((left + right) / 2)
        let total: number = 0

        for (const battery of batteries) {
            total += Math.min(battery, mid)
        }

        if (total >= mid * n) {
            left = mid
        } else {
            right = mid - 1
        }
    }

    return left
}
