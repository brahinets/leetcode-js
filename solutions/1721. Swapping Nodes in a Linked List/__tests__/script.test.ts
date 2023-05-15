import {ListNode, swapNodes} from '../script'

describe('1721. Swapping Nodes in a Linked List', (): void => {
    it('Swap boundaries, first and last', (): void => {
        expect(
            swapNodes(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(5))))),
                1
            )
        ).toStrictEqual(
            new ListNode(5,
                new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(1)))))
        );
    });

    it('Swap center', (): void => {
        expect(
            swapNodes(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(5))))),
                3
            )
        ).toStrictEqual(
            new ListNode(1,
                new ListNode(2,
                    new ListNode(3,
                        new ListNode(4,
                            new ListNode(5)))))
        );
    });

    it('Swap in the middle', (): void => {
        expect(
            swapNodes(
                new ListNode(7,
                    new ListNode(9,
                        new ListNode(6,
                            new ListNode(6,
                                new ListNode(7,
                                    new ListNode(8,
                                        new ListNode(3,
                                            new ListNode(0,
                                                new ListNode(9,
                                                    new ListNode(5)))))))))),
                5
            )
        ).toStrictEqual(
            new ListNode(7,
                new ListNode(9,
                    new ListNode(6,
                        new ListNode(6,
                            new ListNode(8,
                                new ListNode(7,
                                    new ListNode(3,
                                        new ListNode(0,
                                            new ListNode(9,
                                                new ListNode(5)))))))))),
        );
    });
})
