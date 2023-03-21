import {ListNode} from "../common/ListNode";

export {middleNode, ListNode};

function middleNode(head: ListNode | null): ListNode | null {
    const middle: number = Math.floor(countNodes(head) / 2);

    let counter: number = 0;
    let result: ListNode | null = head;
    while (counter < middle && result) {
        result = result.next || null;
        counter++;
    }

    return result;
}

function countNodes(head: ListNode | null): number {
    let counter: number = 0;

    while (head) {
        counter++;
        head = head.next;
    }

    return counter;
}