import {modifiedList} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('3217. Delete Nodes From Linked List Present in Array', (): void => {
    it('Remove multiple different values', (): void => {
        expect(modifiedList([1, 2, 3], linkedListOf(1, 2, 3, 4, 5)))
            .toEqual(linkedListOf(4, 5))
    })

    it('Remove one different value', (): void => {
        expect(modifiedList([1], linkedListOf(1, 2, 1, 2, 1, 2)))
            .toEqual(linkedListOf(2, 2, 2))
    })

    it('Remove nothing', (): void => {
        expect(modifiedList([5], linkedListOf(1, 2, 3, 4)))
            .toEqual(linkedListOf(1, 2, 3, 4))
    })
})
