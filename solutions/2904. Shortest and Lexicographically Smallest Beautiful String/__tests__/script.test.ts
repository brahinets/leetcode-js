import {shortestBeautifulSubstring} from '../script'

describe('2904. Shortest and Lexicographically Smallest Beautiful String', (): void => {
    it('multiple shortest substrings exist and the smallest lexicographically wins', (): void => {
        expect(shortestBeautifulSubstring('100011001', 3)).toBe('11001')
    })

    it('shortest beautiful substring sits at the end of the string', (): void => {
        expect(shortestBeautifulSubstring('1011', 2)).toBe('11')
    })

    it('no beautiful substring exists in an all zero string', (): void => {
        expect(shortestBeautifulSubstring('000', 1)).toBe('')
    })

    it('minimum length string equal to the target count', (): void => {
        expect(shortestBeautifulSubstring('1', 1)).toBe('1')
    })

    it('only the entire string satisfies the target count', (): void => {
        expect(shortestBeautifulSubstring('101', 2)).toBe('101')
    })

    it('candidates of equal length are compared character by character', (): void => {
        expect(shortestBeautifulSubstring('1010101', 2)).toBe('101')
    })

    it('large input completes efficiently', (): void => {
        const binaryString: string = '1'.repeat(50) + '0'.repeat(50)

        expect(shortestBeautifulSubstring(binaryString, 50)).toBe('1'.repeat(50))
    })
})
