import {subarraysDivByK} from '../script'

describe('974. Subarray Sums Divisible by K', (): void => {

    it('Multiple sub-arrays are divisible', (): void => {
        expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
            .toBe(7)
    })

    it('No divisible sub-arrays', (): void => {
        expect(subarraysDivByK([5], 9))
            .toBe(0)
    })
})
