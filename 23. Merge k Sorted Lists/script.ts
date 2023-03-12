import {ListNode} from "../common/ListNode";

export {mergeKLists};

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    return lists.reduce((prev: ListNode | null, curr: ListNode | null) => mergeTwoLists(prev, curr), null);
}

const mergeTwoLists = function (list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let node: ListNode = new ListNode();
    let head: ListNode = node;
    do {
        let first: ListNode | null = list1;
        let second: ListNode | null = list2;
        let value: number;

        if (first?.val != null && second?.val != null) {
            if (first.val > second.val) {
                value = second.val;
                list2 = second.next;
            } else {
                value = first.val;
                list1 = first.next;
            }
        } else {
            if (first?.val != null) {
                value = first.val;
                list1 = first.next;
            } else if (second?.val != null) {
                value = second.val;
                list2 = second.next;
            } else {
                break;
            }
        }

        head.next = new ListNode(value);
        head = head.next;
    } while (list1 || list2);

    return node.next;
};