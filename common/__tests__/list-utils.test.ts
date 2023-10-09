import {linkedListToArray, ListNode} from '../list-utils'
import {linkedListOf} from "../list-factories";

describe('Linked List Factory', (): void => {
    it('Empty list', (): void => {
        expect(linkedListOf())
            .toStrictEqual(null)
    })

    it('Non-empty list', (): void => {
        expect(linkedListOf(1, 2, 3))
            .toStrictEqual(
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(3)))
            )
    })
})

describe('Linked List To Array', (): void => {
    it('Null to array', (): void => {
        expect(linkedListToArray(null))
            .toStrictEqual(null)
    })

    it('Singleton list to array', (): void => {
        expect(linkedListToArray(new ListNode(1)))
            .toStrictEqual([1])
    })

    it('Non-empty list to array', (): void => {
        expect(linkedListToArray(
            new ListNode(1,
                new ListNode(2,
                    new ListNode(3))))
        ).toStrictEqual([1, 2, 3])
    })
})
