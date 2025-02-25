import {numFactoredBinaryTrees} from '../script'

describe('823. Binary Trees With Factors', (): void => {
    it('One', (): void => {
        expect(numFactoredBinaryTrees([2, 4]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(numFactoredBinaryTrees([2, 4, 5, 10]))
            .toBe(7)
    })
})
