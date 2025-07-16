import {maximumLength} from '../script'

describe('3201. Find the Maximum Length of Valid Subsequence I', (): void => {
    it('Full long subsequence', (): void => {
        expect(maximumLength([1, 2, 3, 4]))
            .toBe(4)
    })

    it('Part of subsequence', (): void => {
        expect(maximumLength([1, 2, 1, 1, 2, 1, 2]))
            .toBe(6)
    })

    it('Full short subsequence', (): void => {
        expect(maximumLength([1, 3]))
            .toBe(2)
    })
})
