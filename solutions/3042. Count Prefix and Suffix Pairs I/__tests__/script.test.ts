import {countPrefixSuffixPairs} from '../script'

describe('3042. Count Prefix and Suffix Pairs I', (): void => {
    it('Multiple #1', (): void => {
        expect(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]))
            .toBe(4)
    })

    it('Multiple #2', (): void => {
        expect(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]))
            .toBe(2)
    })

    it('Nothing', (): void => {
        expect(countPrefixSuffixPairs(["abab", "ab"]))
            .toBe(0)
    })
})
