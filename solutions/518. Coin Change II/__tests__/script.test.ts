import {change} from '../script'

describe('518. Coin Change II', (): void => {
    it.skip('Can change by huge breakdown', (): void => {
        expect(change(200, [1, 2, 5]))
            .toBe(400)
    })

    it('Can change by breakdown', (): void => {
        expect(change(5, [1, 2, 5]))
            .toBe(4)
    })

    it('Can change immediately', (): void => {
        expect(change(5, [5]))
            .toBe(1)
    })

    it('Cannot change', (): void => {
        expect(change(3, [2]))
            .toBe(0)
    })
})
