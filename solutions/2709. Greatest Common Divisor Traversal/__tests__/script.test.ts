import {canTraverseAllPairs} from '../script'

describe('2709. Greatest Common Divisor Traversal', (): void => {

    it('Has path', (): void => {
        expect(canTraverseAllPairs([2,3,6]))
            .toBe(true)
    })

    it('Has path as well', (): void => {
        expect(canTraverseAllPairs([4,3,12,8]))
            .toBe(true)
    })

    it('No path', (): void => {
        expect(canTraverseAllPairs([3,9,5]))
            .toBe(false)
    })
})
