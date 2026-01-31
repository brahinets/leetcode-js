import { insertionSortList } from '../script'
import { linkedListOf } from "../../../common/list-factories"

describe('147. Insertion Sort List', (): void => {
    it('Sort null list', (): void => {
        expect(insertionSortList(null))
            .toBe(null)
    })

    it('Sort single element list', (): void => {
        expect(insertionSortList(linkedListOf(1)))
            .toStrictEqual(linkedListOf(1))
    })

    it('Sort already sorted list', (): void => {
        expect(insertionSortList(linkedListOf(1, 2, 3, 4)))
            .toStrictEqual(linkedListOf(1, 2, 3, 4))
    })

    it('Sort reverse sorted list', (): void => {
        expect(insertionSortList(linkedListOf(4, 3, 2, 1)))
            .toStrictEqual(linkedListOf(1, 2, 3, 4))
    })

    it('Sort unsorted list', (): void => {
        expect(insertionSortList(linkedListOf(4, 2, 1, 3)))
            .toStrictEqual(linkedListOf(1, 2, 3, 4))
    })

    it('Sort unsorted list with negatives', (): void => {
        expect(insertionSortList(linkedListOf(-1, 5, 3, 4, 0)))
            .toStrictEqual(linkedListOf(-1, 0, 3, 4, 5))
    })

    it('Sort list with duplicates', (): void => {
        expect(insertionSortList(linkedListOf(3, 1, 2, 1, 3)))
            .toStrictEqual(linkedListOf(1, 1, 2, 3, 3))
    })
})
