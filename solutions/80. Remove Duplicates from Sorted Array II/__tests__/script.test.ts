import {removeDuplicates} from '../script'

describe('80. Remove Duplicates from Sorted Array II', (): void => {
    it('Remove one', (): void => {
        expect(removeDuplicates([1, 1, 1, 2, 2, 3]))
            .toBe(5)
    })

    it('Remove multiple', (): void => {
        expect(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
            .toBe(7)
    })
})
