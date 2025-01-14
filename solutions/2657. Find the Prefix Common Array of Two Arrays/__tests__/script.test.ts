import {findThePrefixCommonArray} from '../script'

describe('2657. Find the Prefix Common Array of Two Arrays', (): void => {
    it('One', (): void => {
        expect(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]))
            .toEqual([0, 2, 3, 4])
    })

    it('Two', (): void => {
        expect(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]))
            .toEqual([0, 1, 3])
    })
})
