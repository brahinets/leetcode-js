import {canBeEqual} from '../script'

describe('1460. Make Two Arrays Equal by Reversing Subarrays', (): void => {
    it('Can make', (): void => {
        expect(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]))
            .toBe(true)
    })

    it('Already equal', (): void => {
        expect(canBeEqual([7], [7]))
            .toBe(true)
    })

    it('Can not make', (): void => {
        expect(canBeEqual([3, 7, 9], [3, 7, 11]))
            .toBe(false)
    })
})
