import { maximumScore } from '../script'

describe('3225. Maximum Score From Grid Operations', (): void => {
    it('Example 1 from problem', (): void => {
        expect(maximumScore([
            [0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0],
            [0, 1, 0, 0, 0],
            [5, 0, 0, 3, 0],
            [0, 0, 0, 0, 2],
        ])).toBe(11)
    })

    it('Example 2 from problem', (): void => {
        expect(maximumScore([
            [10, 9, 0, 0, 15],
            [7, 1, 0, 8, 0],
            [5, 20, 0, 11, 0],
            [0, 0, 0, 1, 2],
            [8, 12, 1, 10, 3],
        ])).toBe(94)
    })

    it('single cell grid', (): void => {
        expect(maximumScore([[5]])).toBe(0)
    })

    it('all zeros', (): void => {
        expect(maximumScore([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ])).toBe(0)
    })
})
