import {pivotArray} from '../script'

describe('2161. Partition Array According to Given Pivot', (): void => {
    it('One', (): void => {
        expect(pivotArray([9, 12, 5, 10, 14, 3, 10], 10))
            .toEqual([9, 5, 3, 10, 10, 12, 14])
    })

    it('Two', (): void => {
        expect(pivotArray([-3, 4, 3, 2], 2))
            .toEqual([-3, 2, 4, 3])
    })
})
