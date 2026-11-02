import {binaryDigitScore} from '../script'

describe('4092. Binary Digit Score', (): void => {
    it('first has more set bits so scores by product', (): void => {
        const a: number = 14
        const b: number = 6

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(6)
    })

    it('second has more set bits so scores by division', (): void => {
        const a: number = 5
        const b: number = 15

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(2)
    })

    it('equal set bits score by product', (): void => {
        const a: number = 10
        const b: number = 12

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(4)
    })

    it('division truncates toward zero', (): void => {
        const a: number = 1
        const b: number = 7

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(3)
    })

    it('division uses integer division when not divisible', (): void => {
        const a: number = 3
        const b: number = 31

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(2)
    })

    it('minimum values', (): void => {
        const a: number = 1
        const b: number = 1

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(1)
    })

    it('maximum values', (): void => {
        const a: number = 100
        const b: number = 100

        const result: number = binaryDigitScore(a, b)

        expect(result)
            .toBe(9)
    })
})
