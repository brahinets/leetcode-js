import {largestCombination} from '../script'

describe('2275. Largest Combination With Bitwise AND Greater Than Zero', (): void => {
    it('One', (): void => {
        expect(largestCombination([16, 17, 71, 62, 12, 24, 14]))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(largestCombination([8, 8]))
            .toBe(2)
    })
})
