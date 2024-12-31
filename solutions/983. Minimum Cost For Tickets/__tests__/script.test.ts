import {mincostTickets} from '../script'

describe('983. Minimum Cost For Tickets', (): void => {
    it('One', (): void => {
        expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]))
            .toBe(11)
    })

    it('Two', (): void => {
        expect(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]))
            .toBe(17)
    })
})
