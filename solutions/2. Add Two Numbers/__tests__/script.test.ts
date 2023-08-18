import {addTwoNumbers, ListNode} from '../script'

describe('2. Add Two Numbers', (): void => {
    it('Zero', (): void => {
        expect(addTwoNumbers(new ListNode(0), new ListNode(0)))
            .toStrictEqual(new ListNode(0))
    })

    it('Same radix', (): void => {
        expect(addTwoNumbers(
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4)))
        )).toStrictEqual(
            new ListNode(7, new ListNode(0, new ListNode(8)))
        )
    })

    it('Different radix', (): void => {
        expect(addTwoNumbers(
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )).toStrictEqual(
            new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))
        )
    })
})
