import {linkedListMiddleNode, linkedListToArray, ListNode, reverseLinkedList} from '../list-utils'
import {linkedListOf} from "../list-factories"

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
        expect(linkedListToArray(linkedListOf(1)))
            .toStrictEqual([1])
    })

    it('Non-empty list to array', (): void => {
        expect(linkedListToArray(linkedListOf(1, 2, 3)))
            .toStrictEqual([1, 2, 3])
    })
})

describe('Linked List Middle Node', (): void => {
    it('Middle node for null', (): void => {
        expect(linkedListMiddleNode(null))
            .toStrictEqual(null)
    })

    it('Middle node for singleton', (): void => {
        expect(linkedListMiddleNode(linkedListOf(1)))
            .toStrictEqual(new ListNode(1))
    })

    it('Middle node for odd size', (): void => {
        expect(linkedListMiddleNode(linkedListOf(1, 2, 3)))
            .toStrictEqual(new ListNode(2, new ListNode(3)))
    })

    it('Middle node for even size', (): void => {
        expect(linkedListMiddleNode(linkedListOf(1, 2, 3, 4)))
            .toStrictEqual(new ListNode(3, new ListNode(4)))
    })
})

describe('Reverse Linked List', (): void => {
    it('Reverse Null list', (): void => {
        expect(reverseLinkedList(null))
            .toStrictEqual(null)
    })

    it('Reverse empty list', (): void => {
        expect(reverseLinkedList(linkedListOf()))
            .toStrictEqual(linkedListOf())
    })

    it('Reverse singleton list', (): void => {
        expect(reverseLinkedList(linkedListOf(1)))
            .toStrictEqual(linkedListOf(1))
    })

    it('Reverse non-empty list', (): void => {
        expect(reverseLinkedList(linkedListOf(1, 2, 3)))
            .toStrictEqual(linkedListOf(3, 2, 1))
    })
})
