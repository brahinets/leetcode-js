import {findLeastNumOfUniqueInts} from '../script'

describe('1481. Least Number of Unique Integers after K Removals', (): void => {

    it('One', (): void => {
        expect(findLeastNumOfUniqueInts([5, 5, 4], 1))
            .toBe(1)
    })

    it('Two', (): void => {
        expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))
            .toBe(2)
    })
})
