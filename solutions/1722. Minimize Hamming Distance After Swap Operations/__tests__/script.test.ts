import { minimumHammingDistance } from '../script'

describe('1722. Minimize Hamming Distance After Swap Operations', (): void => {

    it('no swaps allowed - each index is its own component', (): void => {
        expect(minimumHammingDistance([1, 2, 3, 4], [2, 1, 4, 5], []))
            .toBe(4)
    })

    it('all indices connected - best rearrangement possible', (): void => {
        expect(minimumHammingDistance([2, 3, 1], [1, 2, 4], [[0, 2], [1, 2]]))
            .toBe(1)
    })

    it('partial swap groups - some indices independently matched', (): void => {
        expect(minimumHammingDistance([1, 2, 3, 4], [1, 3, 2, 4], [[1, 2]]))
            .toBe(0)
    })

    it('single element - no swaps possible', (): void => {
        expect(minimumHammingDistance([5], [1], []))
            .toBe(1)
    })

    it('single element - exact match', (): void => {
        expect(minimumHammingDistance([1], [1], []))
            .toBe(0)
    })

    it('transitive swaps connect distant indices', (): void => {
        expect(minimumHammingDistance([1, 2, 3], [3, 1, 2], [[0, 1], [1, 2]]))
            .toBe(0)
    })
})
