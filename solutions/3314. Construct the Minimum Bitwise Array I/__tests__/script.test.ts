import {minBitwiseArray} from '../script'

describe('3314. Construct the Minimum Bitwise Array I', (): void => {
    it('Mix of impossible and solvable cases', (): void => {
        expect(minBitwiseArray([2, 3, 5, 7]))
            .toEqual([-1, 1, 4, 3])
    })

    it('Minimum by clearing bit before first zero in consecutive ones', (): void => {
        expect(minBitwiseArray([11, 13, 31]))
            .toEqual([9, 12, 15])
    })

    it('Repeated prime values consistently', (): void => {
        expect(minBitwiseArray([5, 5, 5]))
            .toEqual([4, 4, 4])
    })
})
