import {ListNode} from "../../common/ListNode"

export {ListNode, addTwoNumbers}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
    l1 = reverseList(l1)
    l2 = reverseList(l2)

    const head: ListNode = new ListNode()
    let incrementNextRadix: boolean = false

    while (l1 || l2 || incrementNextRadix) {
        const sum: number = (incrementNextRadix ? 1 : 0) + (l1 ? l1.val : 0) + (l2 ? l2.val : 0)

        let end: ListNode = head
        while (end.next) {
            end = end.next
        }
        end.next = new ListNode(sum % 10)

        l1 &&= l1.next
        l2 &&= l2.next

        incrementNextRadix = sum >= 10
    }

    return reverseList(head.next) || new ListNode(0)
}

function reverseList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null

    while (head) {
        newHead = new ListNode(head.val, newHead)

        head = head.next
    }

    return newHead
}
