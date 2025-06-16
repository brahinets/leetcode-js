import {maximumDifference} from '../script'

describe('2016. Maximum Difference Between Increasing Elements', (): void => {
    it('There is no such i and j', (): void => {
        expect(maximumDifference([9, 4, 3, 2]))
            .toBe(-1)
    })

    it('Diff with neighbour', (): void => {
        expect(maximumDifference([7, 1, 5, 4]))
            .toBe(4)
    })

    it('Diff with not neighbour', (): void => {
        expect(maximumDifference([1, 5, 2, 10]))
            .toBe(9)
    })
})
