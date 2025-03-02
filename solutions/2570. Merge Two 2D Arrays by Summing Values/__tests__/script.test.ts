import {mergeArrays} from '../script'

describe('2570. Merge Two 2D Arrays by Summing Values', (): void => {
    it('Zero', (): void => {
        expect(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]))
            .toStrictEqual([[1, 6], [2, 3], [3, 2], [4, 6]])
    })

    it('Same radix', (): void => {
        expect(mergeArrays([[2, 4], [3, 6], [5, 5]], [[1, 3], [4, 3]]))
            .toStrictEqual([[1, 3], [2, 4], [3, 6], [4, 3], [5, 5]])
    })
})
