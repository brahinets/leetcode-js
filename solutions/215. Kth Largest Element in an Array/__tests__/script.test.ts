import {findKthLargest} from '../script'

describe('215. Kth Largest Element in an Array', (): void => {

    it('Max by unique', (): void => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2))
            .toStrictEqual(5)
    })

    it('Max by duplicates', (): void => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
            .toStrictEqual(4)
    })

    it('Max by duplicates again', (): void => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 2))
            .toStrictEqual(10)
    })

    it('Illegal state by requirements', (): void => {
        expect(() => findKthLargest([], 1))
            .toThrowError("Illegal state. Not enough data")
    })
})
