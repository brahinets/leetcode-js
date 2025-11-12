import {minOperations} from '../script'

describe('2654. Minimum Number of Operations to Make All Array Elements Equal to 1', (): void => {
    it('Possible with multiple operations', (): void => {
        expect(minOperations([2, 6, 3, 4]))
            .toBe(4)
    })

    it('Impossible', (): void => {
        expect(minOperations([2, 10, 6, 14]))
            .toBe(-1)
    })

    it('Possible with zero operations', (): void => {
        expect(minOperations([1, 1]))
            .toBe(0)
    })
})
