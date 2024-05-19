import {maximumValueSum} from '../script'

describe('3068. Find the Maximum Sum of Node Values', (): void => {

    it('Single operation to get max', (): void => {
        expect(maximumValueSum([1, 2, 1], 3, [[0, 1], [0, 2]]))
            .toBe(6)
    })

    it('Single operation to get max', (): void => {
        expect(maximumValueSum([2, 3], 7, [[0, 1]]))
            .toEqual(9)
    })

    it('No operations to get max', (): void => {
        expect(maximumValueSum([7, 7, 7, 7, 7, 7], 3, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]))
            .toBe(42)
    })
})
