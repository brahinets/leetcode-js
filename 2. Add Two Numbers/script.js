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
}

const toNumber = node => {
    let result = 0;
    let radix = 1;
    let n2 = node;

    while (n2.next) {
        result += radix * n2.val;
        n2 = n2.next;
        radix *= 10;
    }

    result += n2.val * radix;
    return result;
};

const toLinkedList = number => {
    let digits = number.toString().split("");
    let result = null;

    let i = 0;
    while (i < digits.length) {
        result = {val: Number(digits[i]), next: result};
        i++;
    }

    return result;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    return toLinkedList(toNumber(l1) + toNumber(l2));
};