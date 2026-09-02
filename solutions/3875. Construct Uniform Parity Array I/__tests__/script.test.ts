import { uniformArray } from '../script'

describe('3875. Construct Uniform Parity Array I', (): void => {
    it('single odd number pairs with itself through subtraction to become odd', (): void => {
        expect(uniformArray([2, 3])).toBe(
            true
        )
    })

    it('all numbers are already even', (): void => {
        expect(uniformArray([4, 6])).toBe(
            true
        )
    })

    it('array has a single element', (): void => {
        expect(uniformArray([5])).toBe(
            true
        )
    })

    it('exactly one odd number among several even numbers', (): void => {
        expect(uniformArray([4, 6, 8, 7])).toBe(
            true
        )
    })

    it('exactly one even number among several odd numbers', (): void => {
        expect(uniformArray([3, 5, 7, 4])).toBe(
            true
        )
    })

    it('all numbers are already odd', (): void => {
        expect(uniformArray([1, 3, 5])).toBe(
            true
        )
    })
})
