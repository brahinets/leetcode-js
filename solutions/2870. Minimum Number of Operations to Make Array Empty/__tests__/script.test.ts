import {minOperations} from '../script'

describe('2870. Minimum Number of Operations to Make Array Empty', (): void => {

    it('Possible to empty the array', (): void => {
        expect(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]))
            .toBe(4)
    })

    it('Impossible to empty the array', (): void => {
        expect(minOperations([2, 1, 2, 2, 3, 3]))
            .toBe(-1)
    })
})
