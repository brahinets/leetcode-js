import {maxDistinctElements} from '../script'

describe('3397. Maximum Number of Distinct Elements After Operations', (): void => {
    it('One', (): void => {
        expect(maxDistinctElements([1, 2, 2, 3, 3, 4], 2))
            .toBe(6)
    })

    it('Two', (): void => {
        expect(maxDistinctElements([4, 4, 4, 4], 1))
            .toBe(3)
    })
})
