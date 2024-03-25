import {findDuplicates} from '../script'

describe('442. Find All Duplicates in an Array', (): void => {

    it('Has multiple duplicates', (): void => {
        expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
            .toEqual([2, 3])
    })

    it('Has one duplicate', (): void => {
        expect(findDuplicates([1, 1, 2]))
            .toEqual([1])
    })

    it('Has no duplicates', (): void => {
        expect(findDuplicates([1]))
            .toEqual([])
    })
})
