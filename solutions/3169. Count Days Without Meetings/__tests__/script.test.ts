import {countDays} from '../script'

describe('There is no meeting scheduled on some days', (): void => {
    it('There is no meeting scheduled on some days', (): void => {
        expect(countDays(10, [[5, 7], [1, 3], [9, 10]]))
            .toBe(2)
    })

    it('There is no meeting scheduled on the last day.', (): void => {
        expect(countDays(5, [[2, 4], [1, 3]]))
            .toBe(1)
    })

    it('Meetings are scheduled for all working days.', (): void => {
        expect(countDays(6, [[1, 6]]))
            .toBe(0)
    })
})
