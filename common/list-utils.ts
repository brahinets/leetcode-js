import {ListNode} from "./ListNode";

export {linkedListOf, linkedListToArray, ListNode}

function linkedListOf(values: number[] | null): ListNode | null {
    if (!values || values.length === 0) {
        return null;
    }

    const head: ListNode | null = new ListNode(values[0]);
    let tail: ListNode | null = head;
    for (let i: number = 1; i < values.length; i++) {
        tail.next = new ListNode(values[i])
        tail = tail.next;
    }

    return head;
}

function linkedListToArray(head: ListNode | null): number[] | null {
    if (!head) {
        return null;
    }

    const result: number[] = [];

    while (head) {
        result.push(head.val);
        head = head.next;
    }

    return result;
}