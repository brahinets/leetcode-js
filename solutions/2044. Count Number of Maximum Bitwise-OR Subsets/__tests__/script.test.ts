import {countMaxOrSubsets} from '../script'

describe('2044. Count Number of Maximum Bitwise-OR Subsets', (): void => {
    it('All subsets', (): void => {
        expect(countMaxOrSubsets([2, 2, 2]))
            .toBe(7)
    })

    it('Almost all subsets', (): void => {
        expect(countMaxOrSubsets([3, 1]))
            .toBe(2)
    })

    it('Some subsets', (): void => {
        expect(countMaxOrSubsets([3, 2, 1, 5]))
            .toBe(6)
    })
})
