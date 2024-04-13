import {timeRequiredToBuy} from '../script'

describe('2073. Time Needed to Buy Tickets', (): void => {

    it('Buy at first turn', (): void => {
        expect(timeRequiredToBuy([1, 1, 1], 1))
            .toBe(2)
    })

    it('Return two times', (): void => {
        expect(timeRequiredToBuy([2, 3, 2], 2))
            .toBe(6)
    })

    it('Return multiple times', (): void => {
        expect(timeRequiredToBuy([5, 1, 1, 1], 0))
            .toBe(8)
    })

    it('Return multiple times #2', (): void => {
        expect(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3))
            .toBe(154)
    })
})
