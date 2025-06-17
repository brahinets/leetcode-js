import {countGoodArrays} from '../script'

describe('3405. Count the Number of Arrays with K Matching Adjacent Elements', (): void => {
    it('One', (): void => {
        expect(countGoodArrays(3, 2, 1))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(countGoodArrays(4, 2, 2))
            .toBe(6)
    })

    it('Three', (): void => {
        expect(countGoodArrays(5, 2, 0))
            .toBe(2)
    })

    it('Load test', (): void => {
        expect(countGoodArrays(40603, 16984, 29979))
            .toBe(235077659)
    })
})
