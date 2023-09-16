export {dailyTemperatures}

function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = []

    for (let i: number = 0; i < temperatures.length; i++) {
        result.push(findNextGreaterThan(temperatures[i], i + 1, temperatures))
    }

    return result
}

function findNextGreaterThan(value: number, startIndex: number, values: number[]): number {
    let daysToWait: number = 0
    let found: boolean = false

    for (let i: number = startIndex; i < values.length && !found; i++) {
        daysToWait++
        if (values[i] > value) {
            found = true
        }
    }

    return found ? daysToWait : 0
}
