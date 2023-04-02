import {mergeKLists, ListNode} from "../23. Merge k Sorted Lists/script";

export {mergeTwoLists, ListNode}

const mergeTwoLists = function (list1: ListNode | null, list2: ListNode | null): ListNode | null {
    return mergeKLists([list1, list2]);
}