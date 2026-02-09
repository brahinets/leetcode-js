import { singleNumber } from '../script'

describe('136. Single Number', (): void => {

    it('Single number at the end', (): void => {
        expect(singleNumber([2, 2, 1]))
            .toBe(1)
    })

    it('Single number in the middle', (): void => {
        expect(singleNumber([4, 1, 2, 1, 2]))
            .toBe(4)
    })

    it('Single element array', (): void => {
        expect(singleNumber([1]))
            .toBe(1)
    })

    it('Single negative number', (): void => {
        expect(singleNumber([-1]))
            .toBe(-1)
    })

    it('Mixed positive and negative numbers', (): void => {
        expect(singleNumber([1, 3, 1, -1, 3]))
            .toBe(-1)
    })
})
