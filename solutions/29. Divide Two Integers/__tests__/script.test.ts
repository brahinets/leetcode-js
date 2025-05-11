import {divide} from '../script'

describe('29. Divide Two Integers', (): void => {
    it('Simple', (): void => {
        expect(divide(10, 2))
            .toBe(5)
    })

    it('Simple negative', (): void => {
        expect(divide(-10, 2))
            .toBe(-5)
    })

    it('Simple negation', (): void => {
        expect(divide(-10, -2))
            .toBe(5)
    })

    it('Trunkate positive', (): void => {
        expect(divide(10, 3))
            .toBe(3)
    })

    it('Trunkate negative', (): void => {
        expect(divide(7, -3))
            .toBe(-2)
    })

    it('Load test easy', (): void => {
        expect(divide(2147483647, 3))
            .toBe(715827882)
    })

    it('Load test', (): void => {
        expect(divide(2147483647, 1))
            .toBe(2147483647)
    })
})
