import {numberOfWays} from '../script'

describe('2787. Ways to Express an Integer as Sum of Powers', (): void => {
    it('One', (): void => {
        expect(numberOfWays(10, 2))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(numberOfWays(4, 1))
            .toBe(2)
    })
})
