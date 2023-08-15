import {ListNode, partition} from '../script'

describe('86. Partition List', (): void => {

    it('Partition long list', (): void => {
        expect(
            partition(
                new ListNode(1,
                    new ListNode(4,
                        new ListNode(3,
                            new ListNode(2,
                                new ListNode(5,
                                    new ListNode(2))))))
                , 3)
        ).toStrictEqual(
            new ListNode(1,
                new ListNode(2,
                    new ListNode(2,
                        new ListNode(4,
                            new ListNode(3,
                                new ListNode(5)))))),
        )
    })

    it('Reverse short list', (): void => {
        expect(partition(
            new ListNode(2,
                new ListNode(1)),
            2
        )).toStrictEqual(
            new ListNode(1,
                new ListNode(2))
        )
    })
})
