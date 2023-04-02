import {detectCycle, ListNode} from '../script'

describe('142. Linked List Cycle II', (): void => {
    it('Does not cycle', (): void => {
        const node0: ListNode = new ListNode(1);

        expect(detectCycle(node0)).toStrictEqual(null);
    });


    it('Cycles with start', (): void => {
        const node0: ListNode = new ListNode(1);
        const node1: ListNode = new ListNode(2);
        node0.next = node1;
        node1.next = node0;

        expect(detectCycle(node0)).toStrictEqual(node0);
    });

    it('Cycles with non start', (): void => {
        const node0: ListNode = new ListNode(3);
        const node1: ListNode = new ListNode(2);
        const node2: ListNode = new ListNode(0);
        const node3: ListNode = new ListNode(-4);
        node0.next = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node1;

        expect(detectCycle(node0)).toStrictEqual(node1);
    });
})