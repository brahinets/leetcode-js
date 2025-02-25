import {maxScoreSightseeingPair} from '../script'

describe('1014. Best Sightseeing Pair', (): void => {
    it('Different choices', (): void => {
        expect(maxScoreSightseeingPair([8, 1, 5, 2, 6]))
            .toBe(11)
    })

    it('The only choice', (): void => {
        expect(maxScoreSightseeingPair([1, 2]))
            .toBe(2)
    })
})
