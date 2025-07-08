import {maxValue} from '../script'

describe('1751. Maximum Number of Events That Can Be Attended II', (): void => {
    it('Many events', (): void => {
        expect(maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 1]], 2))
            .toBe(7)
    })

    it('Overlapping events', (): void => {
        expect(maxValue([[1, 2, 4], [3, 4, 3], [2, 3, 10]], 2))
            .toBe(10)
    })

    it('Pick the highest valued', (): void => {
        expect(maxValue([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]], 3))
            .toBe(9)
    })
})
