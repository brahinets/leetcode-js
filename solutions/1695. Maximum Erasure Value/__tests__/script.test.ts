import {maximumUniqueSubarray} from '../script'

describe('1695. Maximum Erasure Value', (): void => {
    it('One optimal sub array', (): void => {
        expect(maximumUniqueSubarray([4, 2, 4, 5, 6]))
            .toBe(17)
    })

    it('Two optimal sub arrays', (): void => {
        expect(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]))
            .toBe(8)
    })
})
