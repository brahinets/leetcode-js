class ListNode {
    val: number
    next: ListNode | null

    constructor(val ?: number, next ?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class Solution {
    private readonly data: number[];

    constructor(head: ListNode | null) {
        this.data = [];
        while (head) {
            this.data.push(head.val);
            head = head.next;
        }
    }

    private getRandomInt(maxExclusive: number): number {
        return Math.floor(Math.random() * maxExclusive);
    }

    getRandom(): number {
        let randomIndex: number = this.getRandomInt(this.data.length);
        return this.data[randomIndex];
    }
}