import {numEquivDominoPairs} from '../script'

describe('1128. Number of Equivalent Domino Pairs', (): void => {
    it('Zero', (): void => {
        expect(numEquivDominoPairs([[1, 2], [3, 4], [5, 6]]))
            .toBe(0)
    })

    it('One', (): void => {
        expect(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]]))
            .toBe(1)
    })


    it('Multiple', (): void => {
        expect(numEquivDominoPairs([[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]))
            .toBe(3)
    })
})
