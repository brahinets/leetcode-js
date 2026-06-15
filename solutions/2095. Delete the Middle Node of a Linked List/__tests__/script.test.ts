import {deleteMiddle} from '../script'
import {linkedListOf} from '../../../common/list-factories'
import {ListNode} from '../../../common/ListNode'

describe('2095. Delete the Middle Node of a Linked List', (): void => {

    it('odd length list deletes center node', (): void => {
        const head: ListNode | null = linkedListOf(1, 3, 4, 7, 1, 2, 6)

        const result: ListNode | null = deleteMiddle(head)

        expect(result).toEqual(linkedListOf(1, 3, 4, 1, 2, 6))
    })

    it('even length list deletes second middle node', (): void => {
        const head: ListNode | null = linkedListOf(1, 2, 3, 4)

        const result: ListNode | null = deleteMiddle(head)

        expect(result).toEqual(linkedListOf(1, 2, 4))
    })

    it('two nodes deletes the last node', (): void => {
        const head: ListNode | null = linkedListOf(2, 1)

        const result: ListNode | null = deleteMiddle(head)

        expect(result).toEqual(linkedListOf(2))
    })

    it('single node returns empty list', (): void => {
        const head: ListNode | null = linkedListOf(1)

        const result: ListNode | null = deleteMiddle(head)

        expect(result).toBeNull()
    })

    it('three nodes deletes the middle node', (): void => {
        const head: ListNode | null = linkedListOf(1, 2, 3)

        const result: ListNode | null = deleteMiddle(head)

        expect(result).toEqual(linkedListOf(1, 3))
    })
})
