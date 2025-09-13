import {maxFreqSum} from '../script'

describe('3541. Find Most Frequent Vowel and Consonant', (): void => {
    it('Both consonant and vowel', (): void => {
        expect(maxFreqSum("successes"))
            .toBe(6)
    })

    it('No consonant', (): void => {
        expect(maxFreqSum("aeiaeia"))
            .toBe(3)
    })
})
