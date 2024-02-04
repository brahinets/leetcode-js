import {singleNonDuplicate} from '../script'

describe('540. Single Element in a Sorted Array', (): void => {
    it('Found non duplicate', (): void => {
        expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
            .toBe(2)
    })

    it('Non duplicate not found', (): void => {
        expect(() => singleNonDuplicate([3, 3, 7, 7, 10, 10, 11, 11]))
            .toThrow("Non duplicate not detected")
    })
})
