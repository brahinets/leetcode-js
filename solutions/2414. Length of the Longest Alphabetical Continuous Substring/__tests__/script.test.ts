import {longestContinuousSubstring} from '../script'

describe('2414. Length of the Longest Alphabetical Continuous Substring', (): void => {
    it('Multiple substrings are alphabetical continuous substrings', (): void => {
        expect(longestContinuousSubstring('abacaba'))
            .toEqual(2)
    })

    it('Full string is alphabetical continuous substring', (): void => {
        expect(longestContinuousSubstring("abcde"))
            .toEqual(5)
    })
})
