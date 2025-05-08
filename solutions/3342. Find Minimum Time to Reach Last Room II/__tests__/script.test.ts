import {minTimeToReach} from '../script'

describe('3342. Find Minimum Time to Reach Last Room II', (): void => {
    it('One', (): void => {
        expect(minTimeToReach([[0, 4], [4, 4]]))
            .toBe(7)
    })

    it('Two', (): void => {
        expect(minTimeToReach([[0, 0, 0, 0], [0, 0, 0, 0]]))
            .toBe(6)
    })

    it('Three', (): void => {
        expect(minTimeToReach([[0, 1], [1, 2]]))
            .toBe(4)
    })
})
