import { isGood } from '../script'

describe('2784. Check if Array is Good', (): void => {

    it('smallest good array', (): void => {
        expect(isGood([1, 1]))
            .toBe(true)
    })

    it('missing duplicate of max element', (): void => {
        expect(isGood([2, 1, 3]))
            .toBe(false)
    })

    it('extra elements beyond base length', (): void => {
        expect(isGood([3, 4, 4, 1, 2, 1]))
            .toBe(false)
    })

    it('valid permutation of base', (): void => {
        expect(isGood([1, 3, 3, 2]))
            .toBe(true)
    })

    it('element exceeds expected range', (): void => {
        expect(isGood([1, 2, 4, 4, 3]))
            .toBe(true)
    })

    it('duplicate non-max element', (): void => {
        expect(isGood([1, 1, 2, 2]))
            .toBe(false)
    })

    it('single element not equal to one', (): void => {
        expect(isGood([2]))
            .toBe(false)
    })

    it('element zero present', (): void => {
        expect(isGood([0, 1, 1]))
            .toBe(false)
    })

    it('all elements are the same', (): void => {
        expect(isGood([3, 3, 3]))
            .toBe(false)
    })
})
