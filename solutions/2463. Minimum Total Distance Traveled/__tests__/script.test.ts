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

    it('Three', (): void => {
        expect(minimumTotalDistance([-333539942, 359275673, 89966494, 949684497, -733065249, 241002388, 325009248, 403868412, -390719486, -670541382, 563735045, 119743141, 323190444, 534058139, -684109467, 425503766, 761908175], [[-590277115, 0], [-80676932, 3], [396659814, 0], [480747884, 9], [118956496, 10]]))
            .toBe(4412966458)
    })
})
