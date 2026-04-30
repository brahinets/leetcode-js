import { maxPathScore } from '../script'

describe('3742. Maximum Path Score in a Grid', (): void => {
    it('single cell grid', (): void => {
        expect(maxPathScore([[0]], 0))
            .toBe(0)
    })

    it('all zeros grid returns zero score', (): void => {
        expect(maxPathScore([[0, 0], [0, 0]], 0))
            .toBe(0)
    })

    it('zero cost budget allows only zero-value cells', (): void => {
        expect(maxPathScore([[0, 2], [0, 0]], 0))
            .toBe(0)
    })

    it('no valid path when every route exceeds cost budget', (): void => {
        expect(maxPathScore([[0, 1], [1, 0]], 0))
            .toBe(-1)
    })

    it('prefers high-score path within budget', (): void => {
        expect(maxPathScore([[0, 2, 0], [0, 2, 0], [0, 0, 0]], 2))
            .toBe(4)
    })
})
