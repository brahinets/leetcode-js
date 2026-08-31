import { largestInteger } from '../script'

describe('3705. Find Largest Almost Missing Integer', (): void => {
    it('several candidates qualify and the largest one is chosen', (): void => {
        expect(largestInteger([3, 9, 2, 1, 7], 3)).toBe(7)
    })

    it('a repeated value still counts as a single appearance per window', (): void => {
        expect(largestInteger([3, 9, 7, 2, 1, 7], 4)).toBe(3)
    })

    it('no value appears in exactly one window', (): void => {
        expect(largestInteger([0, 0], 1)).toBe(-1)
    })

    it('window size equal to the array length makes every value qualify', (): void => {
        expect(largestInteger([4, 1, 6], 3)).toBe(6)
    })

    it('window size of one makes every distinct value qualify', (): void => {
        expect(largestInteger([5, 2, 5, 8], 1)).toBe(8)
    })

    it('single element array with window size of one', (): void => {
        expect(largestInteger([42], 1)).toBe(42)
    })
})
