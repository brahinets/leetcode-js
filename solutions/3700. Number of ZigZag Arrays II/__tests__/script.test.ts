import {zigZagArrays} from '../script'

describe('3700. Number of ZigZag Arrays II', (): void => {
    it('counts only peak-valley zigzags when range has two values', (): void => {
        const n: number = 3
        const l: number = 4
        const r: number = 5

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(2)
    })

    it('counts all valid zigzag arrays in a small range', (): void => {
        const n: number = 3
        const l: number = 1
        const r: number = 3

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(10)
    })

    it('handles minimum length with two-value range', (): void => {
        const n: number = 3
        const l: number = 1
        const r: number = 2

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(bruteForceCount(n, l, r))
    })

    it('grows correctly for length four with small range', (): void => {
        const n: number = 4
        const l: number = 1
        const r: number = 3

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(bruteForceCount(n, l, r))
    })

    it('grows correctly for length five with four values', (): void => {
        const n: number = 5
        const l: number = 1
        const r: number = 4

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(bruteForceCount(n, l, r))
    })

    it('stays at two valid arrays for any large length with two-value range', (): void => {
        const n: number = 1_000_000_000
        const l: number = 37
        const r: number = 38

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBe(2)
    })

    it('applies modulo for maximum inputs', (): void => {
        const n: number = 1_000_000_000
        const l: number = 1
        const r: number = 75

        const result: number = zigZagArrays(n, l, r)

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(1_000_000_007)
    })
})

function bruteForceCount(n: number, l: number, r: number): number {
    let total: number = 0

    for (let start: number = l; start <= r; start++) {
        total += countExtensions(n, l, r, 1, start, 0)
    }

    return total
}

function countExtensions(n: number, l: number, r: number, currentLength: number, lastValue: number, secondLastValue: number): number {
    if (currentLength === n) {
        return 1
    }

    let count: number = 0

    for (let nextValue: number = l; nextValue <= r; nextValue++) {
        if (nextValue === lastValue) {
            continue
        }

        if (secondLastValue !== 0) {
            const isIncreasing: boolean = secondLastValue < lastValue && lastValue < nextValue
            const isDecreasing: boolean = secondLastValue > lastValue && lastValue > nextValue

            if (isIncreasing || isDecreasing) {
                continue
            }
        }

        count += countExtensions(n, l, r, currentLength + 1, nextValue, lastValue)
    }

    return count
}
