import {minOperations} from '../script'

describe('2009. Minimum Number of Operations to Make Array Continuous', (): void => {
    it('Nums is already continuous', (): void => {
        expect(minOperations([4, 2, 5, 3]))
            .toBe(0)
    })

    it('One change needed', (): void => {
        expect(minOperations([1, 2, 3, 5, 6]))
            .toBe(1)
    })

    it('Multiple changes needed', (): void => {
        expect(minOperations([1, 10, 100, 1000]))
            .toBe(3)
    })
})
