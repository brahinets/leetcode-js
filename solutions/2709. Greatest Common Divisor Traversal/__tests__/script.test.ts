import {canTraverseAllPairs} from '../script'

describe('2709. Greatest Common Divisor Traversal', (): void => {

    it('Has path', (): void => {
        expect(canTraverseAllPairs([2, 3, 6]))
            .toBe(true)
    })

    it('Has path as well', (): void => {
        expect(canTraverseAllPairs([4, 3, 12, 8]))
            .toBe(true)
    })

    it('No path', (): void => {
        expect(canTraverseAllPairs([3, 9, 5]))
            .toBe(false)
    })

    it('Load test', (): void => {
        expect(canTraverseAllPairs([15, 70, 70, 90, 60, 66, 42, 78, 30, 77, 70, 77, 78, 42, 60, 35, 35, 20, 52, 33, 77, 77, 30, 33, 21, 15, 66, 70, 99]))
            .toBe(true)
    })

    it('Load test #2', (): void => {
        expect(canTraverseAllPairs([35, 42, 30, 26, 26, 33, 44, 33, 30, 12, 35, 30, 39, 30, 42, 14, 21, 15, 30, 40, 20, 42, 40, 20, 42, 35, 10, 35, 45, 35, 30, 49, 42, 44, 33, 21, 30, 30, 35, 30, 42, 42, 33, 30, 30, 15, 30]))
            .toBe(true)
    })
    it('Load test #3', (): void => {
        expect(canTraverseAllPairs([30, 35, 30, 35, 26, 30, 50, 15, 30, 35, 30, 15, 21, 30, 30, 21, 42, 22, 42, 40, 42, 42, 42, 35, 30, 14, 14, 42, 30, 42, 45, 22, 30, 42, 30, 30, 35, 22, 24, 50, 39, 42, 42, 11, 13, 6, 21]))
            .toBe(true)
    })
})
