import {maxSideLength} from '../script'

describe('1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold', (): void => {
    it('Part of side', (): void => {
        expect(maxSideLength([
                [1, 1, 3, 2, 4, 3, 2],
                [1, 1, 3, 2, 4, 3, 2],
                [1, 1, 3, 2, 4, 3, 2]
            ], 4)
        ).toBe(2)
    })

    it('No such side', (): void => {
        expect(maxSideLength([
                [2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2]
            ], 1)
        ).toBe(0)
    })
})
