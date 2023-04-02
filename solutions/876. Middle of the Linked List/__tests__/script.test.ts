import {middleNode, ListNode} from '../script'

describe('876. Middle of the Linked List', (): void => {
    it('Middle of odd array length', (): void => {
        expect(
            middleNode(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(5))))),
            )
        ).toStrictEqual(
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5)))
        );
    });

    it('Middle of even array length', (): void => {
        expect(
            middleNode(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(5,
                                    new ListNode(6)))))),
            )
        ).toStrictEqual(
            new ListNode(4,
                new ListNode(5,
                    new ListNode(6)))
        );
    });
})