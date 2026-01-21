import {minBitwiseArray} from '../script'

describe('3315. Construct the Minimum Bitwise Array II', (): void => {
    it('Mix of impossible and solvable cases', (): void => {
        expect(minBitwiseArray([2, 3, 5, 7]))
            .toEqual([-1, 1, 4, 3])
    })

    it('Minimum by clearing bit before first zero in consecutive ones', (): void => {
        expect(minBitwiseArray([11, 13, 31]))
            .toEqual([9, 12, 15])
    })

    it('Large primes within Part II constraints', (): void => {
        expect(minBitwiseArray([1000000007, 999999937]))
            .toEqual([1000000003, 999999936])
    })
})
