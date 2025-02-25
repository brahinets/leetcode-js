import {diffWaysToCompute} from '../script'

describe('241. Different Ways to Add Parentheses', (): void => {
    it('Same priority operations', (): void => {
        expect(diffWaysToCompute("2-1-1"))
            .toEqual([2, 0])
    })

    it('Different priority operations', (): void => {
        expect(diffWaysToCompute("2*3-4*5"))
            .toEqual([-34, -10, -14, -10, 10])
    })
})
