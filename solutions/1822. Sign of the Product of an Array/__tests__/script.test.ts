import {arraySign} from '../script'

describe('1822. Sign of the Product of an Array', (): void => {

    it('Positive', (): void => {
        expect(arraySign([-1, -2, -3, -4, 3, 2, 1]))
            .toBe(1)
    })

    it('Zero', (): void => {
        expect(arraySign([1, 5, 0, 2, -3]))
            .toBe(0)
    })

    it('Negative', (): void => {
        expect(arraySign([-1, 1, -1, 1, -1]))
            .toBe(-1)
    })
})
