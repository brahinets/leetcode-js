import {mergeTwoLists} from '../script'
import {linkedListOf} from "../../../common/list-utils";

describe('21. Merge Two Sorted Lists', (): void => {
    it('Two lists full', (): void => {
        expect(mergeTwoLists(linkedListOf(1, 2, 4), linkedListOf(1, 3, 4)))
            .toStrictEqual(linkedListOf(1, 1, 2, 3, 4, 4))
    })

    it('Only one lists full', (): void => {
        expect(mergeTwoLists(linkedListOf(), linkedListOf(1)))
            .toStrictEqual(linkedListOf(1))
    })

    it('Both lists are empty', (): void => {
        expect(mergeTwoLists(linkedListOf(), linkedListOf()))
            .toStrictEqual(linkedListOf())
    })
})
