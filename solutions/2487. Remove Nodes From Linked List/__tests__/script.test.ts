import {removeNodes} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('2487. Remove Nodes From Linked List', (): void => {

    it('Remove several', (): void => {
        expect(removeNodes(linkedListOf(5, 2, 13, 3, 8),))
            .toEqual(linkedListOf(13, 8))
    })

    it('Nothing to remove', (): void => {
        expect(removeNodes(linkedListOf(1, 1, 1, 1)))
            .toEqual(linkedListOf(1, 1, 1, 1))
    })
})
