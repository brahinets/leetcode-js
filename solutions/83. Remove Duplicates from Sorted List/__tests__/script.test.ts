import {deleteDuplicates} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('83. Remove Duplicates from Sorted List', (): void => {

    it('Remove nothing', (): void => {
        expect(deleteDuplicates(linkedListOf(1, 2)))
            .toEqual(linkedListOf(1, 2))
    })

    it('Remove one', (): void => {
        expect(deleteDuplicates(linkedListOf(1, 1, 2)))
            .toEqual(linkedListOf(1, 2))
    })

    it('Remove multiple', (): void => {
        expect(deleteDuplicates(linkedListOf(1, 1, 2, 3, 3)))
            .toEqual(linkedListOf(1, 2, 3))
    })
})
