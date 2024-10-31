import {minimumTotalDistance} from '../script'

describe('2463. Minimum Total Distance Traveled', (): void => {
    it('One', (): void => {
        expect(minimumTotalDistance([0, 4, 6], [[2, 2], [6, 2]]))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(minimumTotalDistance([1, -1], [[-2, 1], [2, 1]]))
            .toBe(2)
    })
})
