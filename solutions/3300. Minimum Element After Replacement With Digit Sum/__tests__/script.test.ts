import {minElement} from '../script'

describe('3300. Minimum Element After Replacement With Digit Sum', (): void => {
    it('mixed multi-digit numbers', (): void => {
        expect(minElement([10, 12, 13, 14]))
            .toBe(1)
    })

    it('single digit already minimum', (): void => {
        expect(minElement([38, 192, 5]))
            .toBe(5)
    })

    it('single element', (): void => {
        expect(minElement([999]))
            .toBe(27)
    })

    it('all elements produce same digit sum', (): void => {
        expect(minElement([19, 28, 37]))
            .toBe(10)
    })

    it('single digit elements', (): void => {
        expect(minElement([1, 2, 3]))
            .toBe(1)
    })

    it('large numbers', (): void => {
        expect(minElement([9999, 1000, 5555]))
            .toBe(1)
    })
})
