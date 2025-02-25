import {tupleSameProduct} from '../script'

describe('1726. Tuple with Same Product', (): void => {
    it('One', (): void => {
        expect(tupleSameProduct([2, 3, 4, 6]))
            .toBe(8)
    })

    it('Two', (): void => {
        expect(tupleSameProduct([1, 2, 4, 5, 10]))
            .toBe(16)
    })
})
