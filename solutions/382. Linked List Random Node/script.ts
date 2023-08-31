import {ListNode} from '../../common/ListNode'

class Solution {
    private readonly list: ListNode;
    private readonly size: number;

    constructor(head: ListNode | null) {
        if (!head) {
            throw new Error("List cannot be empty");
        }

        this.list = head;
        this.size = 0;
        while (head) {
            this.size++;
            head = head.next;
        }
    }

    private getRandomInt(maxExclusive: number): number {
        return Math.floor(Math.random() * maxExclusive);
    }

    getRandom(): number {
        let randomIndex: number = this.getRandomInt(this.size);
        let index: number = 0;

        let node: ListNode = this.list;
        while (index < randomIndex && node.next) {
            node = node.next;
            index++;
        }

        return node.val;
    }
}
