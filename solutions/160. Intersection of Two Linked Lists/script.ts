import {ListNode} from "../../common/ListNode"

export {ListNode, getIntersectionNode}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let pA: ListNode | null = headA
    let pB: ListNode | null = headB

    while (pA !== pB) {
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    }

    return pA
}
