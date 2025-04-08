import {minimumOperations} from '../script'

describe('3396. Minimum Number of Operations to Make Elements in Array Distinct', (): void => {
    it('Multiple operations needed', (): void => {
        expect(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]))
            .toBe(2)
    })

    it('Multiple operation needed #2', (): void => {
        expect(minimumOperations([4, 5, 6, 4, 4]))
            .toBe(2)
    })

    it('No operations needed. The array already contains distinct elements', (): void => {
        expect(minimumOperations([6, 7, 8, 9]))
            .toBe(0)
    })
})
