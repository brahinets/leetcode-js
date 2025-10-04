import {deleteDuplicates} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('82. Remove Duplicates from Sorted List II', (): void => {
    it('Remove in middle', (): void => {
        expect(deleteDuplicates(linkedListOf(1, 2, 3, 3, 4, 4, 5)))
            .toEqual(linkedListOf(1, 2, 5))
    })

    it('Remove in beginning', (): void => {
        expect(deleteDuplicates(linkedListOf(1, 1, 1, 2, 3)))
            .toEqual(linkedListOf(2, 3))
    })
})
