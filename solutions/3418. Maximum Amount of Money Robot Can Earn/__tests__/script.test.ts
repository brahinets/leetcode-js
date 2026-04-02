import { maximumAmount } from '../script'

describe('3418. Maximum Amount of Money Robot Can Earn', (): void => {
    it('returns maximum coins neutralizing one robber on optimal path', (): void => {
        expect(maximumAmount([[0, 1, -1], [1, -2, 3], [2, -3, 4]]))
            .toBe(8)
    })

    it('returns sum of all positive cells when no robbers present', (): void => {
        expect(maximumAmount([[10, 10, 10], [10, 10, 10]]))
            .toBe(40)
    })

    it('returns single cell value for 1x1 grid with positive coin', (): void => {
        expect(maximumAmount([[5]]))
            .toBe(5)
    })

    it('neutralizes single cell negative value in 1x1 grid', (): void => {
        expect(maximumAmount([[-5]]))
            .toBe(0)
    })

    it('neutralizes both robbers when only two negative cells on path', (): void => {
        expect(maximumAmount([[-1, -1]]))
            .toBe(0)
    })

    it('accepts one robber loss when three negatives exceed two neutralizations', (): void => {
        expect(maximumAmount([[-3], [-2], [-1]]))
            .toBe(-1)
    })
})
