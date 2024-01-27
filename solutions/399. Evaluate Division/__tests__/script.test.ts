import {calcEquation} from '../script'

describe('399. Evaluate Division', (): void => {
    it('All can be determined', (): void => {
        expect(calcEquation(
            [["a", "b"], ["b", "c"], ["bc", "cd"]],
            [1.5, 2.5, 5.0],
            [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
        )).toStrictEqual(
            [3.75000, 0.40000, 5.00000, 0.20000]
        )
    })

    it('Multiple cannot be determined', (): void => {
        expect(calcEquation(
            [["a", "b"], ["b", "c"]],
            [2.0, 3.0],
            [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
        )).toStrictEqual(
            [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
        )
    })

    it('Some cannot be determined', (): void => {
        expect(calcEquation(
            [["a", "b"]],
            [0.5],
            [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]
        )).toStrictEqual(
            [0.50000, 2.00000, -1.00000, -1.00000]
        )
    })

})
