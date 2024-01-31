import {minDifficulty} from '../script'

describe('1335. Minimum Difficulty of a Job Schedule', (): void => {

    it('Multiple jobs per day', (): void => {
        expect(minDifficulty([6, 5, 4, 3, 2, 1], 2))
            .toBe(7)
    })

    it('One job per day', (): void => {
        expect(minDifficulty([1, 1, 1], 3))
            .toBe(3)
    })

    it('Cannot find schedule', (): void => {
        expect(minDifficulty([9, 9, 9], 4))
            .toBe(-1)
    })
})
