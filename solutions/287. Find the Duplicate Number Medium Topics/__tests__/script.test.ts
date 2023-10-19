import {findDuplicate} from '../script'

describe('287. Find the Duplicate Number Medium Topics', (): void => {
    it('Duplicate in the end', (): void => {
        expect(findDuplicate([1, 3, 4, 2, 2]))
            .toBe(2)
    })

    it('Duplicate in the middle', (): void => {
        expect(findDuplicate([3, 1, 3, 4, 2]))
            .toBe(3)
    })

    it('Duplicate not found', (): void => {
        expect(() => findDuplicate([1, 3, 4, 2]))
            .toThrowError("Duplicate not found")
    })
})
