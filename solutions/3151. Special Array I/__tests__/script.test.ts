import {isArraySpecial} from '../script'

describe('3151. Special Array I', (): void => {
    it('One parity element', (): void => {
        expect(isArraySpecial([1]))
            .toBe(true)
    })

    it('Multiple different parity elements', (): void => {
        expect(isArraySpecial([2, 1, 4]))
            .toBe(true)
    })

    it('Not all parity elements', (): void => {
        expect(isArraySpecial([4, 3, 1, 6]))
            .toBe(false)
    })
})
