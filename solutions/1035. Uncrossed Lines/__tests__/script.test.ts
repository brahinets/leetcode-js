import {maxUncrossedLines} from '../script'

describe('1035. Uncrossed Lines', (): void => {

    it('Remove no crossings', (): void => {
        expect(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]))
            .toBe(2)
    })

    it('Remove one crossing', (): void => {
        expect(maxUncrossedLines([1, 4, 2], [1, 2, 4]))
            .toBe(2)
    })

    it('Remove several crossing', (): void => {
        expect(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]))
            .toBe(3)
    })
})
