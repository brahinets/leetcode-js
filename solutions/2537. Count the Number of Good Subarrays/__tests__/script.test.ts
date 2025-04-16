import {countGood} from '../script'

describe('2537. Count the Number of Good Subarrays', (): void => {
    it('The only good subarray', (): void => {
        expect(countGood([1, 1, 1, 1, 1], 10))
            .toBe(1)
    })

    it('Multiple good subarrays', (): void => {
        expect(countGood([3, 1, 4, 3, 2, 2, 4], 2))
            .toBe(4)
    })
})
