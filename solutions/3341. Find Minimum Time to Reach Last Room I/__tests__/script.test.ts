import {minTimeToReach} from '../script'

describe('3341. Find Minimum Time to Reach Last Room I', (): void => {
    it('One', (): void => {
        expect(minTimeToReach([[0, 4], [4, 4]]))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(minTimeToReach([[0, 0, 0], [0, 0, 0]]))
            .toBe(3)
    })

    it('Three', (): void => {
        expect(minTimeToReach([[0, 1], [1, 2]]))
            .toBe(3)
    })
})
