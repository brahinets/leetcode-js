import {longestSquareStreak} from '../script'

describe('2501. Longest Square Streak in an Array', (): void => {
    it('There is long square streak', (): void => {
        expect(longestSquareStreak([4, 3, 6, 16, 8, 2]))
            .toBe(3)
    })

    it('There is no square streak', (): void => {
        expect(longestSquareStreak([2, 3, 5, 6, 7]))
            .toBe(-1)
    })
})
