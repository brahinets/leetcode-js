import { maxLength } from '../script'

describe('3411. Maximum Subarray With Equal Products', (): void => {
    it('ones around a single two', (): void => {
        expect(maxLength([1, 2, 1, 2, 1, 1, 1])).toBe(5)
    })

    it('pairwise coprime elements in the middle', (): void => {
        expect(maxLength([2, 3, 4, 5, 6])).toBe(3)
    })

    it('ones separating distinct elements', (): void => {
        expect(maxLength([1, 2, 3, 1, 4, 5, 1])).toBe(5)
    })

    it('all ones', (): void => {
        expect(maxLength([1, 1, 1, 1])).toBe(4)
    })

    it('two equal elements', (): void => {
        expect(maxLength([2, 2])).toBe(2)
    })

    it('two coprime elements', (): void => {
        expect(maxLength([2, 3])).toBe(2)
    })

    it('long array of tens stops at a pair', (): void => {
        expect(maxLength(new Array<number>(100).fill(10))).toBe(2)
    })
})
