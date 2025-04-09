import {minOperations} from '../script'

describe('3375. Minimum Operations to Make Array Values Equal to K', (): void => {
    it('Impossible', (): void => {
        expect(minOperations([2, 1, 2], 2))
            .toBe(-1)
    })

    it('Possible #1', (): void => {
        expect(minOperations([5, 2, 5, 4, 5], 2))
            .toBe(2)
    })

    it('Possible #2', (): void => {
        expect(minOperations([9, 7, 5, 3], 1))
            .toBe(4)
    })
})
