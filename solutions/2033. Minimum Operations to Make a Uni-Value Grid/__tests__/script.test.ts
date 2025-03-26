import {minOperations} from '../script'

describe('2033. Minimum Operations to Make a Uni-Value Grid', (): void => {
    it('Possible with few updates', (): void => {
        expect(minOperations([[2, 4], [6, 8]], 2))
            .toBe(4)
    })

    it('Possible with many updates', (): void => {
        expect(minOperations([[1, 5], [2, 3]], 1))
            .toBe(5)
    })

    it('Impossible', (): void => {
        expect(minOperations([[1, 2], [3, 4]], 2))
            .toBe(-1)
    })
})
