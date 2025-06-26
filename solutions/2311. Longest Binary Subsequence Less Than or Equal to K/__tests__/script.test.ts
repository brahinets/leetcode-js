import {longestSubsequence} from '../script'

describe('2311. Longest Binary Subsequence Less Than or Equal to K', (): void => {
    it('One', (): void => {
        expect(longestSubsequence("1001010", 5))
            .toBe(5)
    })

    it('Two', (): void => {
        expect(longestSubsequence("00101001", 1))
            .toBe(6)
    })

    it('Big', (): void => {
        expect(longestSubsequence("111100010000011101001110001111000000001011101111111110111000011111011000010101110100110110001111001001011001010011010000011111101001101000000101101001110110000111101011000101", 11713332))
            .toBe(96)
    })
})
