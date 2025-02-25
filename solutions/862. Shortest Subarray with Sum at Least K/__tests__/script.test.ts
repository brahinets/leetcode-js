import {shortestSubarray} from '../script'

describe('862. Shortest Subarray with Sum at Least K', (): void => {
    it('Full array', (): void => {
        expect(shortestSubarray([1], 1))
            .toBe(1)
    })

    it('No sub-array', (): void => {
        expect(shortestSubarray([1, 2], 4))
            .toBe(-1)
    })

    it('Sub array', (): void => {
        expect(shortestSubarray([2, -1, 2], 3))
            .toBe(3)
    })
})
