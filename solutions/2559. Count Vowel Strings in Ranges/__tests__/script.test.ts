import {vowelStrings} from '../script'

describe('2559. Count Vowel Strings in Ranges', (): void => {
    it('Some string satisfies the conditions', (): void => {
        expect(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]]))
            .toEqual([2, 3, 0])
    })

    it('Every string satisfies the conditions', (): void => {
        expect(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]]))
            .toEqual([3, 2, 1])
    })
})
