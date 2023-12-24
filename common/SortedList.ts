import {ListTNode} from "./ListTNode"


export class SortedList<T> {
    private head: ListTNode<T> | null
    private readonly comparator: Function
    private readonly limit: number

    constructor(comparator: Function, limit: number = Number.POSITIVE_INFINITY) {
        this.limit = limit
        if (limit < 1) {
            throw new Error("Limit must be greater than 0")
        }

        this.head = null
        this.comparator = comparator
    }

    add(value: T): void {
        if (!this.head) {
            this.head = new ListTNode<T>(value)
            return
        }

        let current: ListTNode<T> | null = this.head
        let previous: ListTNode<T> | null = null

        while (current && current.val !== null && this.comparator(current.val, value) <= 0) {
            previous = current
            current = current.next
        }

        if (!previous) {
            this.head = new ListTNode<T>(value, current)
            if (this.size() > this.limit) {
                this.trim()
            }
            return
        }

        previous.next = new ListTNode<T>(value, current)
        if (this.size() > this.limit) {
            this.trim()
        }
    }

    size(): number {
        let size: number = 0
        let current: ListTNode<T> | null = this.head

        while (current) {
            size++
            current = current.next
        }

        return size
    }

    toArray(): T[] {
        const result: T[] = []
        let current: ListTNode<T> | null = this.head

        while (current && current.val !== null) {
            result.push(current.val)
            current = current.next
        }

        return result
    }

    private trim(): void {
        let current: ListTNode<T> | null = this.head
        let previous: ListTNode<T> | null = null

        while (current && current.next) {
            previous = current
            current = current.next
        }

        if (previous) {
            previous.next = null
        }
    }
}
