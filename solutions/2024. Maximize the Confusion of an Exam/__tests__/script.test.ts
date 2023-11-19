import {maxConsecutiveAnswers} from '../script'

describe('2024. Maximize the Confusion of an Exam', (): void => {

    it('Replace either', (): void => {
        expect(maxConsecutiveAnswers("TTFF", 2))
            .toBe(4)
    })

    it('Replace true', (): void => {
        expect(maxConsecutiveAnswers("TTFTTFTT", 1))
            .toBe(5)
    })

    it('Replace false', (): void => {
        expect(maxConsecutiveAnswers("TFFT", 1))
            .toBe(3)
    })
})
