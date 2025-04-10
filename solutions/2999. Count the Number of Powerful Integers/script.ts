export {numberOfPowerfulInt}

function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    const startStr: string = (start - 1).toString()
    const finishStr: string = finish.toString()

    return calculate(finishStr, s, limit) - calculate(startStr, s, limit)
}

function calculate(x: string, s: string, limit: number): number {
    if (x.length < s.length) {
        return 0
    }

    if (x.length === s.length) {
        return x >= s ? 1 : 0
    }

    const suffix: string = x.slice(-s.length)
    let count: number = 0
    const preLen: number = x.length - s.length

    for (let i: number = 0; i < preLen; i++) {
        const digit: number = parseInt(x[i], 10)

        if (limit < digit) {
            count += Math.pow(limit + 1, preLen - i)
            return count
        }

        count += digit * Math.pow(limit + 1, preLen - 1 - i)
    }

    if (suffix >= s) {
        count++
    }

    return count
}
