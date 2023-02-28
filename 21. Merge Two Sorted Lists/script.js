/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? null : val)
        this.next = (next === undefined ? null : next)
    }

    toString() {
        let node = this;
        let res = [];
        while (node) {
            res.push(node.val)
            node = node.next;
        }

        return res;
    }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    let merged = [];

    do {
        let first = list1;
        let second = list2;

        if (first?.val != null && second?.val != null) {
            if (first.val > second.val) {
                merged.push(second.val);
                list2 = second.next;
            } else {
                merged.push(first.val);
                list1 = first.next;
            }
        } else {
            if (first?.val != null) {
                merged.push(first.val);
                list1 = first.next;
            } else if (second?.val != null) {
                merged.push(second.val);
                list2 = second.next;
            } else {
                break;
            }
        }
    } while (list1 || list2);

    let node = new ListNode();
    let head = node;
    for (let i = 0; i < merged.length; i++) {
        head.next = new ListNode(merged[i]);
        head = head.next;
    }

    return node.next;
};