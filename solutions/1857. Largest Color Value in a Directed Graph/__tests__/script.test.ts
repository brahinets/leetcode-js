import {largestPathValue} from '../script'

describe('1857. Largest Color Value in a Directed Graph', (): void => {
    it('Has solution', (): void => {
        expect(largestPathValue("abaca", [[0, 1], [0, 2], [2, 3], [3, 4]]))
            .toBe(3)
    })

    it('There is a cycle', (): void => {
        expect(largestPathValue("a", [[0, 0]]))
            .toBe(-1)
    })
})
