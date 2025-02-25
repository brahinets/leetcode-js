import {findTargetSumWays} from '../script'

describe('494. Target Sum', (): void => {
    it('Multiple ways', (): void => {
        expect(findTargetSumWays([1, 1, 1, 1, 1], 3))
            .toBe(5)
    })

    it('One way', (): void => {
        expect(findTargetSumWays([1], 1))
            .toBe(1)
    })

    it('No ways', (): void => {
        expect(findTargetSumWays([100], -200))
            .toBe(0)
    })
})
