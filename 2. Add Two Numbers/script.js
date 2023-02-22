/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
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

const toDigits = reversedList => {
    let digits = [];

    let n2 = reversedList;
    while (n2.next) {
        digits.push(n2.val);
        n2 = n2.next;
    }
    digits.push(n2.val);

    return digits;
};

const toLinkedList = digits => {
    let head = null;
    let i = digits.length - 1;
    while (i >= 0) {
        let node = new ListNode(digits[i])
        node.next = head;
        head = node;
        i--;
    }

    return head;
}

const sumByDigits = (digits1, digits2) => {
    let longer = (digits1.length > digits2.length ? digits1 : digits2);
    let shorter = (digits2.length >= digits1.length ? digits1 : digits2);

    let incrementNextRadix = false;
    let result = [];
    for (let i = 0; i < longer.length; i++) {
        let sum = incrementNextRadix + longer[i] + (shorter[i] ?? 0);

        result.push(sum % 10);
        incrementNextRadix = sum >= 10;
    }

    if (incrementNextRadix) {
        result.push(1);
    }

    return result;
}

const addTwoNumbers = function (l1, l2) {
    return toLinkedList(sumByDigits(toDigits(l1), toDigits(l2)));
};