import {productExceptSelf} from '../script'

describe('238. Product of Array Except Self', (): void => {

    it('Empty', (): void => {
        expect(productExceptSelf([]))
            .toStrictEqual([])
    })

    it('Only non-zero numbers', (): void => {
        expect(productExceptSelf([1, 2, 3, 4]))
            .toStrictEqual([24, 12, 8, 6])
    })

    it('Contains zero numbers', (): void => {
        expect(productExceptSelf([1, 2, 3, 4, 0]))
            .toStrictEqual([0, 0, 0, 0, 24])
    })

    it('Contains negative numbers', (): void => {
        expect(productExceptSelf([1, -2, -3, -4]))
            .toStrictEqual([-24, 12, 8, 6])
    })
})
