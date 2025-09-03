import {numberOfPairs} from '../script'

describe('3027. Find the Number of Ways to Place People II', (): void => {
    it('One', (): void => {
        expect(numberOfPairs([[1, 1], [2, 2], [3, 3]]))
            .toBe(0)
    })

    it('Two', (): void => {
        expect(numberOfPairs([[6, 2], [4, 4], [2, 6]]))
            .toBe(2)
    })

    it('Three', (): void => {
        expect(numberOfPairs([[3, 1], [1, 3], [1, 1]]))
            .toBe(2)
    })
})
