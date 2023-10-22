export class ListTNode<T> {
    val: T | null
    next: ListTNode<T> | null

    constructor(val?: T, next?: ListTNode<T> | null) {
        this.val = (val === undefined ? null : val)
        this.next = (next === undefined ? null : next)
    }
}
