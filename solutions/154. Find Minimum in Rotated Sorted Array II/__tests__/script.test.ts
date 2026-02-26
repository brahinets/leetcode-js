import {findMin} from '../script'

describe('154. Find Minimum in Rotated Sorted Array II', (): void => {
    it('No duplicates', (): void => {
        expect(findMin([1, 3, 5]))
            .toBe(1)
    })

    it('With duplicates', (): void => {
        expect(findMin([2, 2, 2, 0, 1]))
            .toBe(0)
    })

    it('All same', (): void => {
        expect(findMin([3, 3, 3, 3]))
            .toBe(3)
    })

    it('Single element', (): void => {
        expect(findMin([1]))
            .toBe(1)
    })

    it('Min first', (): void => {
        expect(findMin([1, 3, 3]))
            .toBe(1)
    })
})
