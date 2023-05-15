import {linkedListOf, ListNode} from '../list-utils'

describe('Linked List Factory', (): void => {
    it('Null to list', (): void => {
        expect(linkedListOf(null))
            .toStrictEqual(null);
    });

    it('Empty list', (): void => {
        expect(linkedListOf([]))
            .toStrictEqual(null);
    });

    it('Non-empty list', (): void => {
        expect(linkedListOf([1, 2, 3]))
            .toStrictEqual(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3)))
            );
    });
})
