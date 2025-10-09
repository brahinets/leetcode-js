import {minTime} from '../script'

describe('3494. Find the Minimum Amount of Time to Brew Potions', (): void => {
    it('One', (): void => {
        expect(minTime([1, 5, 2, 4], [5, 1, 4, 2]))
            .toBe(110)
    })

    it('Two', (): void => {
        expect(minTime([1, 1, 1], [1, 1, 1]))
            .toBe(5)
    })

    it('Three', (): void => {
        expect(minTime([1, 2, 3, 4], [1, 2]))
            .toBe(21)
    })
})
