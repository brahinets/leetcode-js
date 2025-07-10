import {maxFreeTime} from '../script'

describe('3440. Reschedule Meetings for Maximum Free Time II', (): void => {
    it('One', (): void => {
        expect(maxFreeTime(5, [1, 3], [2, 5]))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(maxFreeTime(10, [0, 7, 9], [1, 8, 10]))
            .toBe(7)
    })

    it('Three', (): void => {
        expect(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10]))
            .toBe(6)
    })

    it('Nothing', (): void => {
        expect(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]))
            .toBe(0)
    })
})
