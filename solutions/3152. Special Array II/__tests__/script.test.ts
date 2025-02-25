import {isArraySpecial} from '../script'

describe('3152. Special Array II', (): void => {
    it('Not special', (): void => {
        expect(isArraySpecial([3, 4, 1, 2, 6], [[0, 4]]))
            .toEqual([false])
    })

    it('Not special #2', (): void => {
        expect(isArraySpecial([1, 1], [[0, 1]]))
            .toEqual([false])
    })

    it('Has special', (): void => {
        expect(isArraySpecial([4, 3, 1, 6], [[0, 2], [2, 3]]))
            .toEqual([false, true])
    })
})
