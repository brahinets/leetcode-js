import {findCheapestPrice} from '../script'

describe('787. Cheapest Flights Within K Stops', (): void => {

    it('Optimal flight, enough stops allowed', (): void => {
        expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))
            .toBe(200)
    })

    it('Nщn optimal flight, no stops allowed', (): void => {
        expect(findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1))
            .toBe(700)
    })

    it('Direct flight, no stops allowed', (): void => {
        expect(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0))
            .toBe(500)
    })
})
