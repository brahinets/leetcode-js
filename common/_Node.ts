export class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val: number, left?: _Node | null, right?: _Node | null, next?: _Node | null) {
        this.val = val
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}
