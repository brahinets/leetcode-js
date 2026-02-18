import {ListNode, getIntersectionNode} from '../script'

describe('160. Intersection of Two Linked Lists', (): void => {
    it('Intersect at node with value 8', (): void => {
        const intersect: ListNode = new ListNode(8, new ListNode(4, new ListNode(5)))
        const headA: ListNode = new ListNode(4, new ListNode(1, intersect))
        const headB: ListNode = new ListNode(5, new ListNode(6, new ListNode(1, intersect)))

        expect(getIntersectionNode(headA, headB)).toBe(intersect)
    })

    it('Intersect at node with value 2', (): void => {
        const intersect: ListNode = new ListNode(2, new ListNode(4))
        const headA: ListNode = new ListNode(1, new ListNode(9, new ListNode(1, intersect)))
        const headB: ListNode = new ListNode(3, intersect)

        expect(getIntersectionNode(headA, headB)).toBe(intersect)
    })

    it('No intersection', (): void => {
        const headA: ListNode = new ListNode(2, new ListNode(6, new ListNode(4)))
        const headB: ListNode = new ListNode(1, new ListNode(5))

        expect(getIntersectionNode(headA, headB)).toBeNull()
    })

    it('Both null', (): void => {
        expect(getIntersectionNode(null, null)).toBeNull()
    })

    it('Same single node', (): void => {
        const node: ListNode = new ListNode(1)

        expect(getIntersectionNode(node, node)).toBe(node)
    })
})
