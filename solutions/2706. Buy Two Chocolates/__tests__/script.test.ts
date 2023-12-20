import {buyChoco} from '../script'

describe('2706. Buy Two Chocolates', (): void => {

    it('Spend all money', (): void => {
        expect(buyChoco([1, 2, 2], 3))
            .toBe(0)
    })

    it('Spend some money', (): void => {
        expect(buyChoco([3, 2, 3], 3))
            .toBe(3)
    })
})
