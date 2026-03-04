import {findPeakElement} from '../script'

describe('162. Find Peak Element', (): void => {

    it('Single element', (): void => {
        expect(findPeakElement([1])).toBe(0)
    })

    it('Peak at index 2', (): void => {
        expect([1, 2]).toContain(findPeakElement([1, 2, 3, 1]))
    })

    it('Peak at index 1 or 5', (): void => {
        expect([1, 5]).toContain(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
    })

    it('Descending array — peak at index 0', (): void => {
        expect(findPeakElement([3, 2, 1])).toBe(0)
    })

    it('Ascending array — peak at last index', (): void => {
        expect(findPeakElement([1, 2, 3])).toBe(2)
    })
})
