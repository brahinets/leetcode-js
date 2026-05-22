export { isGood }

function isGood(numbers: number[]): boolean {
    const maximum: number = Math.max(...numbers)

    if (numbers.length !== maximum + 1) {
        return false
    }

    const counts: Map<number, number> = new Map<number, number>()

    for (const value of numbers) {
        counts.set(value, (counts.get(value) ?? 0) + 1)
    }

    for (let index: number = 1; index < maximum; index++) {
        if (counts.get(index) !== 1) {
            return false
        }
    }

    return counts.get(maximum) === 2
}
