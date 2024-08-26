import {Node, postorder} from '../script'

describe('590. N-ary Tree Postorder Traversal', (): void => {
    it('Small tree', (): void => {
        expect(postorder(new Node(
            1, [
                new Node(3, [
                    new Node(5, []),
                    new Node(6, []),
                ]),
                new Node(2, []),
                new Node(4, [])
            ])
        )).toStrictEqual([5, 6, 3, 2, 4, 1])
    })

    it('Big tree', (): void => {
        expect(postorder(new Node(
            1, [
                new Node(2, []),
                new Node(3, [
                    new Node(6, []),
                    new Node(7, [
                        new Node(11, [
                            new Node(14, [])
                        ])
                    ])
                ]),
                new Node(4, [
                    new Node(8, [
                        new Node(12, [])
                    ])
                ]),
                new Node(5, [
                    new Node(9, [
                        new Node(13, [])
                    ]),
                    new Node(10, [])
                ])
            ])
        )).toStrictEqual([2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1])
    })
})
