import {ListTNode} from "./ListTNode";


export class SortedList<T> {
    private head: ListTNode<T> | null
    private readonly comparator: Function

    constructor(comparator: Function) {
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
            return
        }

        previous.next = new ListTNode<T>(value, current)
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
}
