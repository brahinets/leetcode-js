import { minimumCost } from '../script'

describe('3010. Divide an Array Into Subarrays With Minimum Cost I', (): void => {
    it('Picks two smallest after first element', (): void => {
        expect(minimumCost([1, 2, 3, 12]))
            .toBe(6)
    })

    it('All elements contribute when array has minimum length', (): void => {
        expect(minimumCost([5, 4, 3]))
            .toBe(12)
    })

    it('Handles duplicate smallest values', (): void => {
        expect(minimumCost([10, 3, 1, 1]))
            .toBe(12)
    })
})
