import { constructTransformedArray } from './solution'

describe('3379. Transformed Array', () => {
    it('Mixed positive values', () => {
        expect(constructTransformedArray([3, -2, 1, 1]))
            .toEqual([1, 1, 1, 3])
    })

    it('All negative ones', () => {
        expect(constructTransformedArray([-1, 4, -1]))
            .toEqual([-1, -1, 4])
    })

    it('Contains zeros', () => {
        expect(constructTransformedArray([0, 1, -1]))
            .toEqual([0, -1, 1])
    })

    it('Single element', () => {
        expect(constructTransformedArray([5]))
            .toEqual([5])
    })

    it('All zeros', () => {
        expect(constructTransformedArray([0, 0, 0]))
            .toEqual([0, 0, 0])
    })

    it('Large wrap around positive', () => {
        expect(constructTransformedArray([7, 1]))
            .toEqual([1, 7])
    })

    it('Large wrap around negative', () => {
        expect(constructTransformedArray([1, -7]))
            .toEqual([-7, 1])
    })
})
