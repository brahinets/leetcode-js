import {maxAdjacentDistance} from '../script'

describe('3423. Maximum Difference Between Adjacent Elements in a Circular Array', (): void => {
    it('Circular difference', (): void => {
        expect(maxAdjacentDistance([1, 2, 4]))
            .toBe(3)
    })

    it('Negative difference', (): void => {
        expect(maxAdjacentDistance([-5, -10, -5]))
            .toBe(5)
    })
})
