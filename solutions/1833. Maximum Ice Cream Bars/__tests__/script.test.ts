import {maxIceCream} from '../script'

describe('1833. Maximum Ice Cream Bars', (): void => {
    it('buys maximum bars within budget when multiple options available', (): void => {
        const result: number = maxIceCream([1, 3, 2, 4, 1], 7)

        expect(result)
            .toBe(4)
    })

    it('buys nothing when cheapest bar exceeds budget', (): void => {
        const result: number = maxIceCream([10, 6, 8, 7, 7, 8], 5)

        expect(result)
            .toBe(0)
    })

    it('buys all bars when budget covers all', (): void => {
        const result: number = maxIceCream([1, 6, 3, 1, 2, 5], 20)

        expect(result)
            .toBe(6)
    })

    it('buys single cheapest bar when budget is tight', (): void => {
        const result: number = maxIceCream([5, 5, 5, 5], 5)

        expect(result)
            .toBe(1)
    })

    it('handles single bar within budget', (): void => {
        const result: number = maxIceCream([3], 10)

        expect(result)
            .toBe(1)
    })

    it('handles single bar exceeding budget', (): void => {
        const result: number = maxIceCream([10], 5)

        expect(result)
            .toBe(0)
    })
})
