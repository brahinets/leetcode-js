import {makeTheIntegerZero} from '../script'

describe('2749. Minimum Operations to Make the Integer Zero', (): void => {
    it('Some operations', (): void => {
        expect(makeTheIntegerZero(3, -2))
            .toBe(3)
    })

    it('Impossible', (): void => {
        expect(makeTheIntegerZero(5, 7))
            .toBe(-1)
    })
})
