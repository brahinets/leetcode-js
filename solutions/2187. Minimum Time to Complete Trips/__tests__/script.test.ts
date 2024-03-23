import {minimumTime} from '../script'

describe('2187. Minimum Time to Complete Trips', (): void => {

    it('Multiple bus', (): void => {
        expect(minimumTime([1, 2, 3], 5))
            .toBe(3)
    })

    it('Only one bus', (): void => {
        expect(minimumTime([2], 1))
            .toBe(2)
    })
})
