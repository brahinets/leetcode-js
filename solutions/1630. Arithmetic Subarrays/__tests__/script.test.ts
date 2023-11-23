import {checkArithmeticSubarrays} from '../script'

describe('1630. Arithmetic Subarrays', (): void => {
    it('Empty', (): void => {
        expect(checkArithmeticSubarrays([], [], []))
            .toEqual([])
    })

    it('Small', (): void => {
        expect(checkArithmeticSubarrays([1], [0], [0]))
            .toEqual([true])
    })

    it('Middle', (): void => {
        expect(checkArithmeticSubarrays(
            [4, 6, 5, 9, 3, 7],
            [0, 0, 2],
            [2, 3, 5])
        ).toEqual([true, false, true])
    })

    it('Long', (): void => {
        expect(checkArithmeticSubarrays(
            [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
            [0, 1, 6, 4, 8, 7],
            [4, 4, 9, 7, 9, 10])
        ).toEqual([false, true, false, false, true, true])
    })
})
