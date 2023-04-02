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

const sumByDigits = function (l1, l2) {
    let head = new ListNode();
    let incrementNextRadix = false;

    while (l1 || l2 || incrementNextRadix) {
        const sum = incrementNextRadix + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);

        let end = head;
        while(end.next) {
            end = end.next;
        }
        end.next = new ListNode(sum % 10);

        l1 &&= l1.next;
        l2 &&= l2.next;

        incrementNextRadix = sum >= 10;
    }

    return head.next;
};


const addTwoNumbers = function (l1, l2) {
    return sumByDigits(l1, l2);
};