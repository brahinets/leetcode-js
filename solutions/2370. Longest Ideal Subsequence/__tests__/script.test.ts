import {longestIdealString} from '../script'

describe('2370. Longest Ideal Subsequence', (): void => {

    it('No ideal part', (): void => {
        expect(longestIdealString("afz", 2))
            .toBe(1)
    })

    it('Subsequence is ideal', (): void => {
        expect(longestIdealString("acfgbd", 2))
            .toBe(4)
    })

    it('Subsequence is ideal #2', (): void => {
        expect(longestIdealString("znrkjnk", 8))
            .toBe(6)
    })

    it('Full string is ideal', (): void => {
        expect(longestIdealString("abcd", 3))
            .toBe(4)
    })
})
