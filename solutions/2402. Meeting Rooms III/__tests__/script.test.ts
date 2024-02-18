import {mostBooked} from '../script'

describe('2402. Meeting Rooms III', (): void => {

    it('Same bookings', (): void => {
        expect(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]]))
            .toBe(0)
    })

    it('Some same bookings', (): void => {
        expect(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]))
            .toBe(1)
    })

    it('Some same bookings #2', (): void => {
        expect(mostBooked(3, [[1, 5], [3, 10], [5,18], [7,13], [8,15], [9,12]]))
            .toBe(0)
    })
})
