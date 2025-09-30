import {triangularSum} from '../script'

describe('2221. Find Triangular Sum of an Array', (): void => {
    it('One', (): void => {
        expect(triangularSum([1, 2, 3, 4, 5]))
            .toBe(8)
    })

    it('Two', (): void => {
        expect(triangularSum([5]))
            .toBe(5)
    })
})
