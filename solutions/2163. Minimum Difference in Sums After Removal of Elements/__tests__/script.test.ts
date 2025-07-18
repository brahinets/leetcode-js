import {minimumDifference} from '../script'

describe('2163. Minimum Difference in Sums After Removal of Elements', (): void => {
    it('Negative diff', (): void => {
        expect(minimumDifference([3, 1, 2]))
            .toBe(-1)
    })

    it('Positive diff', (): void => {
        expect(minimumDifference([7, 9, 5, 8, 1, 3]))
            .toBe(1)
    })
})
