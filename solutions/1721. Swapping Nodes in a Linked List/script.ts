import {ListNode} from "../../common/ListNode";

export {swapNodes, ListNode};

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let newHead: ListNode | null = head;
    let length: number = 0;

    while (newHead) {
        newHead = newHead.next;
        length++;
    }


    let first: number | undefined;
    let second: number | undefined;
    newHead = head;
    let i: number = 1;
    while (newHead) {
        if (i === k) {
            first = newHead.val;
        }

        if (i === length + 1 - k) {
            second = newHead.val;
        }

        newHead = newHead.next;
        i++;
    }

    if (first === undefined || second === undefined) {
        throw new Error("Element not found");
    }

    newHead = head;
    i = 1;
    while (head) {
        if (i === k) {
            head.val = second;
        }

        if (i === length + 1 - k) {
            head.val = first;
        }

        head = head.next;
        i++;
    }

    return newHead;
}