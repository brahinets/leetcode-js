import {numOfWays} from '../script'

describe('1411. Number of Ways to Paint N × 3 Grid', (): void => {
    it('Several', (): void => {
        expect(numOfWays(1))
            .toBe(12)
    })

    it('Many', (): void => {
        expect(numOfWays(5000))
            .toBe(30228214)
    })
})
