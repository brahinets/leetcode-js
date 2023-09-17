import {sortArray} from '../script'

describe('912. Sort an Array', (): void => {
    it('Even size without duplicates', (): void => {
        expect(sortArray([5, 2, 3, 1]))
            .toStrictEqual([1, 2, 3, 5])
    })

    it('Even size with duplicates', (): void => {
        expect(sortArray([5, 1, 1, 2, 0, 0]))
            .toStrictEqual([0, 0, 1, 1, 2, 5])
    })

    it('Odd size with duplicates', (): void => {
        expect(sortArray([1, 1, 2, 0, 0]))
            .toStrictEqual([0, 0, 1, 1, 2])
    })

    it('Odd size without duplicates', (): void => {
        expect(sortArray([1, 2, 0]))
            .toStrictEqual([0, 1, 2])
    })
})
