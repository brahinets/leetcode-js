import {findDifference} from '../script'

describe('2215. Find the Difference of Two Arrays', (): void => {
    it('Both has unique', (): void => {
        expect(findDifference([1, 2, 3], [2, 4, 6]))
            .toStrictEqual([[1, 3], [4, 6]])
    })

    it('First has unique', (): void => {
        expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
            .toStrictEqual([[3], []])
    })

    it('Second has unique', (): void => {
        expect(findDifference([1, 1, 2, 2], [1, 2, 3, 3]))
            .toStrictEqual([[], [3]])
    })

    it('Neither has unique', (): void => {
        expect(findDifference([1, 2, 3], [1, 2, 3]))
            .toStrictEqual([[], []])
    })
})
