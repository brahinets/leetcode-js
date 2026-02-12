import { longestBalanced } from '../script'

describe('3713. Longest Balanced Substring I', (): void => {
    it('Balanced substring with repeated characters (abbac -> abba)', (): void => {
        expect(longestBalanced('abbac'))
            .toBe(4)
    })

    it('Balanced substring with all unique characters (zzabccy -> zabc)', (): void => {
        expect(longestBalanced('zzabccy'))
            .toBe(4)
    })

    it('Two character balanced substring (aba -> ab or ba)', (): void => {
        expect(longestBalanced('aba'))
            .toBe(2)
    })

    it('Single character', (): void => {
        expect(longestBalanced('a'))
            .toBe(1)
    })

    it('All same characters', (): void => {
        expect(longestBalanced('aaaa'))
            .toBe(4)
    })

    it('All different characters', (): void => {
        expect(longestBalanced('abcdef'))
            .toBe(6)
    })
})
