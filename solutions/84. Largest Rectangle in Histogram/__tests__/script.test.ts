import {largestRectangleArea} from '../script'

describe('84. Largest Rectangle in Histogram', (): void => {
    it('Complex', (): void => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3]))
            .toBe(10)
    })

    it('TGwo options the same', (): void => {
        expect(largestRectangleArea([2, 4]))
            .toBe(4)
    })

    it('The only colon at all', (): void => {
        expect(largestRectangleArea([2]))
            .toBe(2)
    })
})
