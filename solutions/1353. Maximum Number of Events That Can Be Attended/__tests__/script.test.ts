import {maxEvents} from '../script'

describe('1353. Maximum Number of Events That Can Be Attended', (): void => {
    it('Visit all', (): void => {
        expect(maxEvents([[1, 2], [2, 3], [3, 4]]))
            .toBe(3)
    })

    it('Visit some at the same day', (): void => {
        expect(maxEvents([[1, 2], [2, 3], [3, 4], [1, 2]]))
            .toBe(4)
    })
})
