import {connect} from '../script'
import {_Node} from "../../../common/_Node"

describe('116. Populating Next Right Pointers in Each Node', (): void => {

    it('Complex tree', (): void => {
        const n4: _Node = new _Node(4)
        const n5: _Node = new _Node(5)
        const n6: _Node = new _Node(6)
        const n7: _Node = new _Node(7)
        const n2: _Node = new _Node(2, n4, n5)
        const n3: _Node = new _Node(3, n6, n7)

        const output: _Node = new _Node(1, n2, n3)
        n4.next = n5
        n5.next = n6
        n6.next = n7
        n2.next = n3
        n3.next = null
        n7.next = null

        const input = new _Node(
            1,
            new _Node(2,
                new _Node(4),
                new _Node(5)),
            new _Node(3,
                new _Node(6),
                new _Node(7))
        )

        expect(connect(input)).toEqual(output)
    })

    it('Empty tree', (): void => {
        expect(connect(null))
            .toEqual(null)
    })
})

