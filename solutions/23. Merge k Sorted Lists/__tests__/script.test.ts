import {ListNode, mergeKLists} from '../script'

describe('23. Merge k Sorted Lists', (): void => {
    it('Two lists full', (): void => {
        expect(
            mergeKLists([
                new ListNode(1,
                    new ListNode(4,
                        new ListNode(5))),
                new ListNode(1,
                    new ListNode(3,
                        new ListNode(4))),
                new ListNode(2,
                    new ListNode(6))
            ])
        ).toStrictEqual(
            new ListNode(1,
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3,
                            new ListNode(4,
                                new ListNode(4,
                                    new ListNode(5,
                                        new ListNode(6))))))))
        );
    });

    it('Both lists are empty', (): void => {
        expect(mergeKLists([null, null]))
            .toStrictEqual(null);
    });
})
