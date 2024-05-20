import {subsetXORSum} from '../script'

describe('1863. Sum of All Subset XOR Totals', (): void => {

    it('Few subsets', (): void => {
        expect(subsetXORSum([1, 3]))
            .toBe(6)
    })

    it('Several subsets', (): void => {
        expect(subsetXORSum([2, 4, 4]))
            .toEqual(24)
    })

    it('Several subsets #2', (): void => {
        expect(subsetXORSum([5, 1, 6]))
            .toEqual(28)
    })

    it('Many subsets', (): void => {
        expect(subsetXORSum([3, 4, 5, 6, 7, 8]))
            .toBe(480)
    })
})
