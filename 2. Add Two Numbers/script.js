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

const toDigits = reversedList => {
    let digits = [];

    let n2 = reversedList;
    while (n2.next) {
        digits.unshift(n2.val);
        n2 = n2.next;
    }
    digits.unshift(n2.val);

    return digits;
};

const toLinkedList = digits => {
    let result = null;

    let i = 0;
    while (i < digits.length) {
        result = {val: digits[i], next: result};
        i++;
    }

    return result;
}

const sumByDigits = (digits1, digits2) => {
    let longer = (digits1.length > digits2.length ? digits1 : digits2).reverse();
    let shorter = (digits2.length >= digits1.length ? digits1 : digits2).reverse();

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

    return result.reverse();
}

const addTwoNumbers = function (l1, l2) {
    return toLinkedList(sumByDigits(toDigits(l1), toDigits(l2)));
};