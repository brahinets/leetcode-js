import {findTheLongestSubstring} from '../script'

describe('1371. Find the Longest Substring Containing Vowels in Even Counts', (): void => {

    it('Part of string is longest substring', (): void => {
        expect(findTheLongestSubstring("leetcodeisgreat"))
            .toBe(5)
    })

    it('Almost full string is longest substring', (): void => {
        expect(findTheLongestSubstring("eleetminicoworoep"))
            .toBe(13)
    })
    it('Full string is longest substring', (): void => {
        expect(findTheLongestSubstring("bcbcbc"))
            .toBe(6)
    })
})
