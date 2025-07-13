import {matchPlayersAndTrainers} from '../script'

describe('2410. Maximum Matching of Players With Trainers', (): void => {
    it('One', (): void => {
        expect(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(matchPlayersAndTrainers([1, 1, 1], [10]))
            .toBe(1)
    })
})
