import {minMovesToSeat} from '../script'

describe('2037. Minimum Number of Moves to Seat Everyone', (): void => {

    it('Move to the left', (): void => {
        expect(minMovesToSeat([3, 1, 5], [2, 7, 4]))
            .toBe(4)
    })

    it('Keep someone', (): void => {
        expect(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]))
            .toBe(7)
    })

    it('Move to the right', (): void => {
        expect(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]))
            .toBe(4)
    })
})
