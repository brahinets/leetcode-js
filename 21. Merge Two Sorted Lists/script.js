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
    let node = new ListNode();
    let head = node;
    do {
        let first = list1;
        let second = list2;
        let value;

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