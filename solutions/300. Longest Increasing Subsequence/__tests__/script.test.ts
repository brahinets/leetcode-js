import {lengthOfLIS} from '../script'

describe('300. Longest Increasing Subsequence', (): void => {

    it('Multiple subsequences', (): void => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
            .toBe(4)
    })

    it('Multiple subsequences #2', (): void => {
        expect(lengthOfLIS([0, 1, 0, 3, 2, 3]))
            .toBe(4)
    })

    it('Single element is sequence', (): void => {
        expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
            .toBe(1)
    })
})
