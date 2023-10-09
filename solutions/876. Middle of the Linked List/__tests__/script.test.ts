import {middleNode} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('876. Middle of the Linked List', (): void => {
    it('Middle of odd array length', (): void => {
        expect(middleNode(linkedListOf(1, 2, 3, 4, 5)))
            .toStrictEqual(linkedListOf(3, 4, 5))
    })

    it('Middle of even array length', (): void => {
        expect(middleNode(linkedListOf(1, 2, 3, 4, 5, 6)))
            .toStrictEqual(linkedListOf(4, 5, 6))
    })
})
