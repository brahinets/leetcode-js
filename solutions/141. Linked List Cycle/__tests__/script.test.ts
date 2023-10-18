import {hasCycle, ListNode} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('141. Linked List Cycle', (): void => {
    it('Does not cycle', (): void => {
        expect(hasCycle(linkedListOf(1)))
            .toBe(false)
    })

    it('Cycles with start', (): void => {
        const node0: ListNode = new ListNode(1)
        const node1: ListNode = new ListNode(2)
        node0.next = node1
        node1.next = node0

        expect(hasCycle(node0))
            .toBe(true)
    })

    it('Cycles with non start', (): void => {
        const node0: ListNode = new ListNode(3)
        const node1: ListNode = new ListNode(2)
        const node2: ListNode = new ListNode(0)
        const node3: ListNode = new ListNode(-4)
        node0.next = node1
        node1.next = node2
        node2.next = node3
        node3.next = node1

        expect(hasCycle(node0))
            .toBe(true)
    })
})
