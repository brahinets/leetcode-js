import { maxFreeTime } from '../script'

describe('3439. Reschedule Meetings for Maximum Free Time I', (): void => {
    it('One', (): void => {
        expect(maxFreeTime(5, 1, [1, 3], [2, 5]))
            .toBe(2)
    })

    it('Leaving no meetings during the time', (): void => {
        expect(maxFreeTime(10, 1, [0, 2, 9], [1, 4, 10]))
            .toBe(6)
    })

    it('There is no time during the event not occupied by meetings', (): void => {
        expect(maxFreeTime(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]))
            .toBe(0)
    })
})
