import {ListNode} from "./ListNode";

export class SortedList {
    private head: ListNode | null

    constructor() {
        this.head = null
    }

    add(value: number): void {
        if (!this.head) {
            this.head = new ListNode(value)
            return
        }

        let current: ListNode | null = this.head
        let previous: ListNode | null = null

        while (current && current.val < value) {
            previous = current
            current = current.next
        }

        if (!previous) {
            this.head = new ListNode(value, current)
            return
        }

        previous.next = new ListNode(value, current)
    }

    size(): number {
        let size: number = 0
        let current: ListNode | null = this.head

        while (current) {
            size++
            current = current.next
        }

        return size
    }

    toArray(): number[] {
        const result: number[] = []
        let current: ListNode | null = this.head

        while (current) {
            result.push(current.val)
            current = current.next
        }

        return result
    }
}
