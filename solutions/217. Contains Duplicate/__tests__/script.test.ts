import {containsDuplicate} from '../script'

describe('217. Contains Duplicate', (): void => {
    it('Has one duplicate', (): void => {
        expect(containsDuplicate([1, 2, 3, 1]))
            .toBe(true)
    })

    it('Has multiple duplicates', (): void => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
            .toBe(true)
    })

    it('Has no duplicates', (): void => {
        expect(containsDuplicate([1, 2, 3, 4]))
            .toBe(false)
    })
})
