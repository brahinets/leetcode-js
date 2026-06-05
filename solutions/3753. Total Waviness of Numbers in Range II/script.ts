export { totalWaviness }

function totalWaviness(num1: number, num2: number): number {
    return countWavinessUpTo(num2) - countWavinessUpTo(num1 - 1)
}

function countWavinessUpTo(n: number): number {
    if (n <= 0) {
        return 0
    }

    const digits: number[] = []
    let remaining: number = n

    while (remaining > 0) {
        digits.unshift(remaining % 10)
        remaining = Math.floor(remaining / 10)
    }

    const completionsMemo: Map<number, number> = new Map<number, number>()
    const wavinessMemo: Map<number, number> = new Map<number, number>()

    return dpWaviness(0, -1, -1, true, false, digits, completionsMemo, wavinessMemo)
}

function encodeCompletion(
    position: number,
    tight: boolean,
    started: boolean,
): number {
    return (position * 2 + (tight ? 1 : 0)) * 2 + (started ? 1 : 0)
}

function countCompletions(
    position: number,
    tight: boolean,
    started: boolean,
    digits: number[],
    memo: Map<number, number>,
): number {
    if (position === digits.length) {
        return started ? 1 : 0
    }

    const key: number = encodeCompletion(position, tight, started)
    const cached: number | undefined = memo.get(key)

    if (cached !== undefined) {
        return cached
    }

    const limit: number = tight ? digits[position] : 9
    let count: number = 0

    for (let digit: number = 0; digit <= limit; digit++) {
        const newTight: boolean = tight && digit === limit

        if (!started && digit === 0) {
            count += countCompletions(position + 1, newTight, false, digits, memo)
        } else {
            count += countCompletions(position + 1, newTight, true, digits, memo)
        }
    }

    memo.set(key, count)

    return count
}

function encodeWaviness(
    position: number,
    previousPrevious: number,
    previous: number,
    tight: boolean,
    started: boolean,
): number {
    return (
        ((((position * 11 + (previousPrevious + 1)) * 11 + (previous + 1)) * 2) +
            (tight ? 1 : 0)) *
            2 +
        (started ? 1 : 0)
    )
}

function dpWaviness(
    position: number,
    previousPrevious: number,
    previous: number,
    tight: boolean,
    started: boolean,
    digits: number[],
    completionsMemo: Map<number, number>,
    wavinessMemo: Map<number, number>,
): number {
    if (position === digits.length) {
        return 0
    }

    const key: number = encodeWaviness(position, previousPrevious, previous, tight, started)
    const cached: number | undefined = wavinessMemo.get(key)

    if (cached !== undefined) {
        return cached
    }

    const limit: number = tight ? digits[position] : 9
    let total: number = 0

    for (let digit: number = 0; digit <= limit; digit++) {
        const newTight: boolean = tight && digit === limit

        if (!started && digit === 0) {
            total += dpWaviness(position + 1, -1, -1, newTight, false, digits, completionsMemo, wavinessMemo)
        } else {
            let waviness: number = 0

            if (started && previousPrevious !== -1) {
                if (
                    (previous > previousPrevious && previous > digit) ||
                    (previous < previousPrevious && previous < digit)
                ) {
                    waviness = 1
                }
            }

            const subCompletions: number = countCompletions(position + 1, newTight, true, digits, completionsMemo)
            const subWaviness: number = dpWaviness(position + 1, previous, digit, newTight, true, digits, completionsMemo, wavinessMemo)

            total += waviness * subCompletions + subWaviness
        }
    }

    wavinessMemo.set(key, total)

    return total
}
