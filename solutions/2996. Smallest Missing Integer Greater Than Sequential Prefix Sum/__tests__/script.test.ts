import {missingInteger} from '../script'

describe('2996. Smallest Missing Integer Greater Than Sequential Prefix Sum', (): void => {
    it('sum of the longest sequential prefix is absent from the array', (): void => {
        expect(missingInteger([1, 2, 3, 2, 5]))
            .toBe(6)
    })

    it('several consecutive integers after the prefix sum are present', (): void => {
        expect(missingInteger([3, 4, 5, 1, 12, 14, 13]))
            .toBe(15)
    })

    it('single element array has itself as the sequential prefix sum', (): void => {
        expect(missingInteger([50]))
            .toBe(51)
    })

    it('entire array forms one sequential prefix', (): void => {
        expect(missingInteger([1, 2, 3, 4, 5]))
            .toBe(15)
    })

    it('no sequential prefix beyond the first element', (): void => {
        expect(missingInteger([5, 1, 1, 1]))
            .toBe(6)
    })
})
