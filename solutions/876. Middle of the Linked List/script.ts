import {ListNode} from "../../common/ListNode";

export {middleNode, ListNode};

function middleNode(head: ListNode | null): ListNode | null {
    let long: ListNode | null = head;
    let result: ListNode | null = head;

    while (long) {
        long = long?.next || null;
        if (long) {
            result = result?.next || null;
        }

        long = long?.next || null;
    }

    return result;
}