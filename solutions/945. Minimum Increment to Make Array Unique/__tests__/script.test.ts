import {minIncrementForUnique} from '../script'

describe('945. Minimum Increment to Make Array Unique', (): void => {

    it('No moves is needed', (): void => {
        expect(minIncrementForUnique([1, 2, 3]))
            .toBe(0)
    })

    it('Only one move is needed', (): void => {
        expect(minIncrementForUnique([1, 2, 2]))
            .toBe(1)
    })

    it('Multiple moves are needed', (): void => {
        expect(minIncrementForUnique([3, 2, 1, 2, 1, 7]))
            .toBe(6)
    })
})
