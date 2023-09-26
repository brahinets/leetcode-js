import {ListNode} from "../../common/ListNode"

export {swapPairs}

function swapPairs(head: ListNode | null): ListNode | null {
    let firstNode: ListNode | null = head
    let secondNode: ListNode | null = head?.next || null

    while (firstNode && secondNode) {
        const tmp: number = firstNode.val
        firstNode.val = secondNode.val
        secondNode.val = tmp

        firstNode = firstNode?.next?.next || null
        secondNode = secondNode?.next?.next || null
    }

    return head
}
