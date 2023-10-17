import {removeNthFromEnd} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('19. Remove Nth Node From End of List', (): void => {

    it('Reverse first element', (): void => {
        expect(removeNthFromEnd(linkedListOf(1, 2), 2))
            .toStrictEqual(linkedListOf(2))
    })

    it('Remove middle element', (): void => {
        expect(removeNthFromEnd(linkedListOf(1, 2, 3, 4, 5), 2))
            .toStrictEqual(linkedListOf(1, 2, 3, 5))
    })

    it('Reverse last element', (): void => {
        expect(removeNthFromEnd(linkedListOf(1, 2), 1))
            .toStrictEqual(linkedListOf(1))
    })

    it('Remove the only element', (): void => {
        expect(removeNthFromEnd(linkedListOf(1), 1))
            .toStrictEqual(linkedListOf())
    })
})
