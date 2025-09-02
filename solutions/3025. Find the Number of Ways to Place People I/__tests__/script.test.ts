import {numberOfPairs} from '../script'

describe('3025. Find the Number of Ways to Place People I', (): void => {
    it('Nothing', (): void => {
        expect(numberOfPairs([[1, 1], [2, 2], [3, 3]]))
            .toEqual(0)
    })

    it('Rectangles', (): void => {
        expect(numberOfPairs([[6, 2], [4, 4], [2, 6]]))
            .toEqual(2)
    })

    it('Lines', (): void => {
        expect(numberOfPairs([[3, 1], [1, 3], [1, 1]]))
            .toEqual(2)
    })
})
