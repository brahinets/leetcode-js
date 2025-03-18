import {longestNiceSubarray} from '../script'

describe('2401. Longest Nice Subarray', (): void => {
    it('Medium sub array is longest', (): void => {
        expect(longestNiceSubarray([1, 3, 8, 48, 10]))
            .toBe(3)
    })

    it('Small sub array is longest', (): void => {
        expect(longestNiceSubarray([3, 1, 5, 11, 13]))
            .toBe(1)
    })

    it('Full array is longest sub array', (): void => {
        expect(longestNiceSubarray([3]))
            .toBe(1)
    })
})
