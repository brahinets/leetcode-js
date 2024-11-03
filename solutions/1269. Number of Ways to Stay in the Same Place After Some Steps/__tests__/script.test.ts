import {numWays} from '../script'

describe('1269. Number of Ways to Stay in the Same Place After Some Steps', (): void => {
    it('One', (): void => {
        expect(numWays(3, 2))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(numWays(2, 4))
            .toBe(2)
    })

    it('Three', (): void => {
        expect(numWays(4, 2))
            .toBe(8)
    })
})
