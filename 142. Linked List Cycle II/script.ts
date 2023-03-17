import {ListNode} from "../common/ListNode";

function detectCycle(head: ListNode | null): ListNode | null {
    let hare: ListNode | null | undefined = head;
    let tortoise: ListNode | null | undefined = head;

    while (hare && hare.next) {
        hare = hare?.next?.next;
        tortoise = tortoise?.next;

        const loopDetected: boolean = hare === tortoise;
        if (loopDetected) {
            tortoise = head;

            while (tortoise !== hare) {
                hare = hare?.next;
                tortoise = tortoise?.next;
            }

            return tortoise || null;
        }
    }

    return null;
}