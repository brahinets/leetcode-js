import {intersect} from '../script'

describe('350. Intersection of Two Arrays II', (): void => {
    it('Include all repeating numbers', (): void => {
        expect(intersect([1, 2, 2, 1], [2, 2]))
            .toEqual([2, 2])
    })

    it('Include only repeating numbers', (): void => {
        expect(intersect([1, 2, 2, 1], [2]))
            .toEqual([2])
    })

    it('Only unique numbers', (): void => {
        expect(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
            .toEqual([4, 9])
    })
})
