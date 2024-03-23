import {sortedSquares} from '../script'

describe('977. Squares of a Sorted Array', (): void => {

    it('First', (): void => {
        expect(sortedSquares([-4, -1, 0, 3, 10]))
            .toEqual([0, 1, 9, 16, 100])
    })

    it('Second', (): void => {
        expect(sortedSquares([-7, -3, 2, 3, 11]))
            .toEqual([4, 9, 9, 49, 121])
    })
})
