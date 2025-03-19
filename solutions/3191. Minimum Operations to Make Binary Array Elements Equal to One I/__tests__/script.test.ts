import {minOperations} from '../script'

describe('3191. Minimum Operations to Make Binary Array Elements Equal to One I', (): void => {
    it('Possible', (): void => {
        expect(minOperations([0, 1, 1, 1, 0, 0]))
            .toBe(3)
    })

    it('Impossible', (): void => {
        expect(minOperations([0, 1, 1, 1]))
            .toBe(-1)
    })
})
