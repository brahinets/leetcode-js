import {ListNode} from "../../common/ListNode";

export {reverseList, ListNode};

function reverseList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null;

    while (head) {
        newHead = new ListNode(head.val, newHead);

        head = head.next;
    }

    return newHead;
}