import {minimumDifference} from '../script'

describe('1984. Minimum Difference Between Highest and Lowest of K Scores', (): void => {
    it('single element', (): void => {
        expect(minimumDifference([90], 1))
            .toBe(0)
    })

    it('pick two from four', (): void => {
        expect(minimumDifference([9, 4, 1, 7], 2))
            .toBe(2)
    })
})
