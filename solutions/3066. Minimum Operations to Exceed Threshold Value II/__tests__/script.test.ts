import {minOperations} from '../script'

describe('3066. Minimum Operations to Exceed Threshold Value II\n', (): void => {
    it('One', (): void => {
        expect(minOperations([2, 11, 10, 1, 3], 10))
            .toBe(2)
    })

    it('Two', (): void => {
        expect(minOperations([1, 1, 2, 4, 9], 20))
            .toBe(4)
    })
})
