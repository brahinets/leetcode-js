import {maxKelements} from '../script'

describe('2530. Maximal Score After Applying K Operations', (): void => {

    it('Apply the operation to each array element exactly once', (): void => {
        expect(maxKelements([10, 10, 10, 10, 10], 5))
            .toBe(50)
    })

    it('Mix operations', (): void => {
        expect(maxKelements([1, 10, 3, 3, 3], 3))
            .toBe(17)
    })
})
