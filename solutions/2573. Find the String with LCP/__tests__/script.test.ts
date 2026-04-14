import { findTheString } from '../script'

describe('2573. Find the String with LCP', (): void => {
    it('alphabetically smallest string for alternating lcp pattern', (): void => {
        expect(findTheString([[4, 0, 2, 0], [0, 3, 0, 1], [2, 0, 2, 0], [0, 1, 0, 1]]))
            .toBe('abab')
    })

    it('single repeated character for all-same lcp', (): void => {
        expect(findTheString([[4, 3, 2, 1], [3, 3, 2, 1], [2, 2, 2, 1], [1, 1, 1, 1]]))
            .toBe('aaaa')
    })

    it('empty string when diagonal value is invalid', (): void => {
        expect(findTheString([[4, 3, 2, 1], [3, 3, 2, 1], [2, 2, 2, 1], [1, 1, 1, 3]]))
            .toBe('')
    })

    it('single character string for 1x1 matrix', (): void => {
        expect(findTheString([[1]]))
            .toBe('a')
    })

    it('empty string when lcp values are inconsistent with character assignments', (): void => {
        expect(findTheString([[2, 0], [0, 2]]))
            .toBe('')
    })

    it('two-character string with distinct characters', (): void => {
        expect(findTheString([[2, 0], [0, 1]]))
            .toBe('ab')
    })

    it('empty string when same-character constraint contradicts zero lcp', (): void => {
        expect(findTheString([[2, 2], [2, 1]]))
            .toBe('')
    })
})
