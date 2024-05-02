import {minOperations} from '../script'

describe('2997. Minimum Number of Operations to Make Array XOR Equal to K', (): void => {

    it('Several flips', (): void => {
        expect(minOperations([2, 1, 3, 4], 1))
            .toBe(2)
    })

    it('Already satisfy', (): void => {
        expect(minOperations([2, 0, 2, 0], 0))
            .toBe(0)
    })
})
