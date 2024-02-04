import {mergeAlternately} from '../script'

describe('1768. Merge Strings Alternately', (): void => {
    it('Equal length', (): void => {
        expect(mergeAlternately("abc", "pqr"))
            .toBe("apbqcr")
    })

    it('First shorter', (): void => {
        expect(mergeAlternately("ab", "pqrs"))
            .toBe("apbqrs")
    })

    it('Second shorter', (): void => {
        expect(mergeAlternately("abcd", "pq"))
            .toBe("apbqcd")
    })
})
