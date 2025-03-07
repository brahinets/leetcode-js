import {closestPrimes} from '../script'

describe('2523. Closest Prime Numbers in Range', (): void => {
    it('Has closest', (): void => {
        expect(closestPrimes(10, 19))
            .toEqual([11, 13])
    })

    it('No closest. Only one', (): void => {
        expect(closestPrimes(4, 6))
            .toEqual([-1, -1])
    })
})
