import {mergeTwoLists, ListNode} from '../script'

describe('21. Merge Two Sorted Lists', (): void => {
    it('Two lists full', (): void => {
        expect(
            mergeTwoLists(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(4))),
                new ListNode(1,
                    new ListNode(3,
                        new ListNode(4)))
            )
        ).toStrictEqual(
            new ListNode(1,
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(4))))))
        );
    });

    it('Only one lists full', (): void => {
        expect(mergeTwoLists(null, new ListNode(1)))
            .toStrictEqual(new ListNode(1));
    });

    it('Both lists are empty', (): void => {
        expect(mergeTwoLists(null, null))
            .toStrictEqual(null);
    });
})
