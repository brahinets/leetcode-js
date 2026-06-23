import {zigZagArrays} from '../script'

describe('3699. Number of ZigZag Arrays I', (): void => {
    it('counts only peak-valley zigzags when range has two values', (): void => {
        const n: number = 3
        const l: number = 4
        const r: number = 5

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(2)
    })

    it('counts all valid zigzag arrays in a small range', (): void => {
        const n: number = 3
        const l: number = 1
        const r: number = 3

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(10)
    })

    it('handles minimum length with full range', (): void => {
        const n: number = 3
        const l: number = 1
        const r: number = 2

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(2)
    })

    it('grows correctly for length four', (): void => {
        const n: number = 4
        const l: number = 1
        const r: number = 3

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(bruteForce(n, l, r))
    })

    it('grows correctly for length five', (): void => {
        const n: number = 5
        const l: number = 1
        const r: number = 4

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(bruteForce(n, l, r))
    })

    it('handles wide range with small length', (): void => {
        const n: number = 3
        const l: number = 1
        const r: number = 10

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBe(bruteForce(n, l, r))
    })

    it('applies modulo for large inputs', (): void => {
        const n: number = 2000
        const l: number = 1
        const r: number = 2000

        const result: number = zigZagArrays(n, l, r)

        expect(result)
            .toBeGreaterThanOrEqual(0)
        expect(result)
            .toBeLessThan(1_000_000_007)
    })
})

function bruteForce(n: number, l: number, r: number): number {
    let count: number = 0

    function generate(current: number[]): void {
        if (current.length === n) {
            count++
            return
        }

        const last: number = current[current.length - 1]
        const secondLast: number = current.length >= 2 ? current[current.length - 2] : -Infinity

        for (let value: number = l; value <= r; value++) {
            if (value === last) {
                continue
            }

            if (current.length >= 2) {
                const isIncreasing: boolean = secondLast < last && last < value
                const isDecreasing: boolean = secondLast > last && last > value

                if (isIncreasing || isDecreasing) {
                    continue
                }
            }

            current.push(value)
            generate(current)
            current.pop()
        }
    }

    for (let start: number = l; start <= r; start++) {
        generate([start])
    }

    return count
}
