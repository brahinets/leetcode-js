import {minOperations} from '../script'

describe('3495. Minimum Operations to Make Array Elements Zero', (): void => {
    it('One', (): void => {
        expect(minOperations([[1, 2], [2, 4]]))
            .toBe(3)
    })

    it('Two', (): void => {
        expect(minOperations([[2, 6]]))
            .toBe(4)
    })
})
