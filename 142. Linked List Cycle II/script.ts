class ListNode {
    val: number
    next: ListNode | null

    constructor(val ?: number, next ?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

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