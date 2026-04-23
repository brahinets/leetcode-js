import { distance } from '../script'

describe('2615. Sum of Distances', (): void => {

    it('all elements distinct returns zeros', (): void => {
        expect(distance([0, 5, 3]))
            .toEqual([0, 0, 0])
    })

    it('single element group has zero distance', (): void => {
        expect(distance([1, 3, 1, 1, 2]))
            .toEqual([5, 0, 3, 4, 0])
    })

    it('two elements with same value', (): void => {
        expect(distance([1, 1]))
            .toEqual([1, 1])
    })

    it('all elements same value', (): void => {
        expect(distance([1, 1, 1]))
            .toEqual([3, 2, 3])
    })

    it('single element array', (): void => {
        expect(distance([42]))
            .toEqual([0])
    })

})
