import {mergeKLists} from "../23. Merge k Sorted Lists/script";
import {ListNode} from "../common/ListNode";

const mergeTwoLists = function (list1: ListNode, list2: ListNode): ListNode | null {
    return mergeKLists([list1, list2]);
}