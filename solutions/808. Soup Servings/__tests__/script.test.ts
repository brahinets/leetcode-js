import {soupServings} from '../script'

describe('808. Soup Servings', (): void => {

    it('Small chance', (): void => {
        expect(soupServings(50))
            .toBeCloseTo(0.62500, 5)
    })

    it('Medium chance', (): void => {
        expect(soupServings(100))
            .toBeCloseTo(0.71875, 5)
    })

    it('High chance', (): void => {
        expect(soupServings(850))
            .toBeCloseTo(0.96612, 5)
    })

    it('100% chance', (): void => {
        expect(soupServings(660295675))
            .toBe(1)
    })
})
