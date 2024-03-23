import {numberOfWays} from '../script'

describe('2147. Number of Ways to Divide a Long Corridor', (): void => {
    it('No way to divide', (): void => {
        expect(numberOfWays("S"))
            .toBe(0)
    })

    it('The only way to divide', (): void => {
        expect(numberOfWays("PPSPSP"))
            .toBe(1)
    })

    it('Multiple ways to divide', (): void => {
        expect(numberOfWays("SSPPSPS"))
            .toBe(3)
    })
})
