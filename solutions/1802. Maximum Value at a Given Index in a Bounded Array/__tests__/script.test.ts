import {maxValue} from '../script'

describe('1802. Maximum Value at a Given Index in a Bounded Array', (): void => {
    it('Mirrored array', (): void => {
        expect(maxValue(4, 2, 6))
            .toBe(2)
    })

    it('More', (): void => {
        expect(maxValue(6, 1, 10))
            .toBe(3)
    })
})
