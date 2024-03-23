import {rangeBitwiseAnd} from '../script'

describe('201. Bitwise AND of Numbers Range', (): void => {

    it('One', (): void => {
        expect(rangeBitwiseAnd(5, 7))
            .toBe(4)
    })

    it('Two', (): void => {
        expect(rangeBitwiseAnd(0, 0))
            .toBe(0)
    })

    it('Three', (): void => {
        expect(rangeBitwiseAnd(1, 2147483647))
            .toBe(0)
    })
})
