export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    toArray(): number[] {
        let node: ListNode | null = this;
        let res: number[] = [];
        while (node) {
            res.push(node.val)
            node = node.next;
        }

        return res;
    }
}