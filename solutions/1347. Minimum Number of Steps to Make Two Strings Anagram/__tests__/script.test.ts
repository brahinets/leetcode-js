import {minSteps} from '../script'

describe('1347. Minimum Number of Steps to Make Two Strings Anagram', (): void => {

    it('Already anagram', (): void => {
        expect(minSteps("anagram", "mangaar"))
            .toBe(0)
    })

    it('One change needed', (): void => {
        expect(minSteps("bab", "aba"))
            .toBe(1)
    })

    it('Many changes needed', (): void => {
        expect(minSteps("leetcode", "practice"))
            .toBe(5)
    })
})
