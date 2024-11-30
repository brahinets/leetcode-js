import {validArrangement} from '../script'

describe('2097. Valid Arrangement of Pairs', (): void => {
    it('One', (): void => {
        expect(validArrangement([[5, 1], [4, 5], [11, 9], [9, 4]]))
            .toEqual([[11, 9], [9, 4], [4, 5], [5, 1]])
    })

    it('Two', (): void => {
        expect(validArrangement([[1, 3], [3, 2], [2, 1]]))
            .toEqual([[1, 3], [3, 2], [2, 1]])
    })

    it('Three', (): void => {
        expect(validArrangement([[1, 2], [1, 3], [2, 1]]))
            .toEqual([[1, 2], [2, 1], [1, 3]])
    })
})
