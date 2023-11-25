import {getSumAbsoluteDifferences} from '../script'

describe('1685. Sum of Absolute Differences in a Sorted Array', (): void => {

    it('No', (): void => {
        expect(getSumAbsoluteDifferences([]))
            .toEqual([])
    })

    it('Several', (): void => {
        expect(getSumAbsoluteDifferences([2, 3, 5]))
            .toEqual([4, 3, 5])
    })

    it('Multiple', (): void => {
        expect(getSumAbsoluteDifferences([1, 4, 6, 8, 10]))
            .toEqual([24, 15, 13, 15, 21])
    })
})
