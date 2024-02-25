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

    it('Load test', (): void => {
        expect(canTraverseAllPairs([15,70,70,90,60,66,42,78,30,77,70,77,78,42,60,35,35,20,52,33,77,77,30,33,21,15,66,70,99]))
            .toBe(true)
    })
})
