import {numberOfSubarrays} from '../script'

describe('1248. Count Number of Nice Subarrays', (): void => {

    it('Zero sub-arrays due to no odd numbers', (): void => {
        expect(numberOfSubarrays([2, 4, 6], 1))
            .toBe(0)
    })

    it('Several nice sub-arrays', (): void => {
        expect(numberOfSubarrays([1, 1, 2, 1, 1], 3))
            .toBe(2)
    })

    it('Many nice sub-arrays', (): void => {
        expect(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2))
            .toBe(16)
    })
})

