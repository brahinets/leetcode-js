import {reverseList, ListNode} from '../script'

describe('206. Reverse Linked List', (): void => {
    it('Reverse long list', (): void => {
        expect(
            reverseList(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(5))))),
            )
        ).toStrictEqual(
            new ListNode(5,
                new ListNode(4,
                    new ListNode(3,
                        new ListNode(2,
                            new ListNode(1)))))
        );
    });

    it('Reverse short list', (): void => {
        expect(reverseList(new ListNode(1, new ListNode(2))))
            .toStrictEqual(new ListNode(2, new ListNode(1)));
    });

    it('Reverse empty list', (): void => {
        expect(reverseList(null))
            .toStrictEqual(null);
    });
})