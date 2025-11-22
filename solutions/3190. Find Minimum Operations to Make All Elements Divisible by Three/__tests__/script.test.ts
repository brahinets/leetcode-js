import {minimumOperations} from '../script'

describe('3190. Find Minimum Operations to Make All Elements Divisible by Three', (): void => {
    it('No operations needed', (): void => {
        expect(minimumOperations([3, 6, 9]))
            .toBe(0)
    })

    it('One operations needed', (): void => {
        expect(minimumOperations([2, 6, 9]))
            .toBe(1)
    })

    it('Multiple operations needed', (): void => {
        expect(minimumOperations([1, 2, 3, 4]))
            .toBe(3)
    })
})
