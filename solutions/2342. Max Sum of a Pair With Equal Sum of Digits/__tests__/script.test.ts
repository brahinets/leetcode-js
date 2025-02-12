import {maximumSum} from '../script'

describe('2342. Max Sum of a Pair With Equal Sum of Digits', (): void => {
    it('One', (): void => {
        expect(maximumSum([18, 43, 36, 13, 7]))
            .toBe(54)
    })

    it('Two', (): void => {
        expect(maximumSum([10, 12, 19, 14]))
            .toBe(-1)
    })
})
