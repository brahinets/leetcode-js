import {mergeKLists} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('23. Merge k Sorted Lists', (): void => {
    it('Two lists full', (): void => {
        expect(mergeKLists([
            linkedListOf(1, 4, 5),
            linkedListOf(1, 3, 4),
            linkedListOf(2, 6)
        ])).toStrictEqual(linkedListOf(1, 1, 2, 3, 4, 4, 5, 6))
    })

    it('Two empty lists', (): void => {
        expect(mergeKLists([linkedListOf(), linkedListOf()]))
            .toStrictEqual(linkedListOf())
    })

    it('Both lists are empty', (): void => {
        expect(mergeKLists([null, null]))
            .toStrictEqual(null)
    })
})
