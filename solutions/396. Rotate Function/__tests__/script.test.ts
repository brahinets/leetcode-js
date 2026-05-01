import { maxRotateFunction } from '../script'

describe('396. Rotate Function', (): void => {
    it('single element', (): void => {
        expect(maxRotateFunction([100])).toBe(0)
    })

    it('all elements equal', (): void => {
        expect(maxRotateFunction([2, 2, 2])).toBe(6)
    })

    it('maximum found at last rotation', (): void => {
        expect(maxRotateFunction([4, 3, 2, 6])).toBe(26)
    })

    it('two elements', (): void => {
        expect(maxRotateFunction([1, 2])).toBe(2)
    })

    it('all negative elements', (): void => {
        expect(maxRotateFunction([-1, -2, -3])).toBe(-5)
    })
})
