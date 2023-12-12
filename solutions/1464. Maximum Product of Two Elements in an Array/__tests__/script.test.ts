import {maxProduct} from '../script'

describe('1464. Maximum Product of Two Elements in an Array', (): void => {

    it('Missing in the beginning', (): void => {
        expect(maxProduct([3, 4, 5, 2]))
            .toBe(12)
    })

    it('Missing in the middle', (): void => {
        expect(maxProduct([1, 5, 4, 5]))
            .toBe(16)
    })

    it('Missing in the end', (): void => {
        expect(maxProduct([3, 7]))
            .toBe(12)
    })
})
