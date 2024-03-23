import {intersection} from '../script'

describe('349. Intersection of Two Arrays', (): void => {

    it('Single unique common', (): void => {
        expect(intersection([1, 2], [2, 3]))
            .toEqual([2])
    })

    it('Single non-unique common', (): void => {
        expect(intersection([1, 2, 2, 1], [2, 2]))
            .toEqual([2])
    })

    it('Multiple common', (): void => {
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
            .toEqual([4, 9])
    })
})
