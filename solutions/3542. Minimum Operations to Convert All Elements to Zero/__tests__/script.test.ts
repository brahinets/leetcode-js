import {minOperations} from '../script'

describe('3542. Minimum Operations to Convert All Elements to Zero', (): void => {
    it('One', (): void => {
        expect(minOperations([0, 2]))
            .toBe(1)
    })

    it('Multiple', (): void => {
        expect(minOperations([3, 1, 2, 1]))
            .toBe(3)
    })

    it('Many', (): void => {
        expect(minOperations([1, 2, 1, 2, 1, 2]))
            .toBe(4)
    })
})
