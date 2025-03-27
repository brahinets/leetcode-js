import {minimumIndex} from '../script'

describe('2780. Minimum Index of a Valid Split', (): void => {
    it('One', (): void => {
        expect(minimumIndex([1, 2, 2, 2]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(minimumIndex([2, 1, 3, 1, 1, 1, 7, 1, 2, 1]))
            .toBe(4)
    })

    it('Three', (): void => {
        expect(minimumIndex([3, 3, 3, 3, 7, 2, 2]))
            .toBe(-1)
    })
})
