class ListNode {
    val: number
    next: ListNode | null

    constructor(val ?: number, next ?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    let fast: ListNode | null | undefined = head;
    let slow: ListNode | null | undefined = head;

    while (fast && fast.next) {
        fast = fast?.next?.next;
        slow = slow?.next;

        let loopDetected: boolean = fast === slow;

        if (loopDetected) {
            slow = head;

            while (slow != fast) {
                fast = fast?.next;
                slow = slow?.next;
            }

            return slow || null;
        }
    }

    return null;
}