export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }

    toArray(): number[] {
        const res: number[] = [this.val];

        let next: ListNode | null = this.next;
        while (next) {
            res.push(next.val);
            next = next.next;
        }

        return res;
    }
}