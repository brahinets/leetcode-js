import {mySqrt} from '../script'

describe('69. Sqrt(x)', (): void => {
    it('Integer', (): void => {
        expect(mySqrt(4))
            .toBe(2)
    })

    it('Should round to lowest integer', (): void => {
        expect(mySqrt(8))
            .toBe(2)
    })
})
