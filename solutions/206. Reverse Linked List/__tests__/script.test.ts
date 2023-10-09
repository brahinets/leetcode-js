import {reverseList} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('206. Reverse Linked List', (): void => {
    it('Reverse long list', (): void => {
        expect(reverseList(linkedListOf(1, 2, 3, 4, 5)))
            .toStrictEqual(linkedListOf(5, 4, 3, 2, 1))
    })

    it('Reverse short list', (): void => {
        expect(reverseList(linkedListOf(1, 2)))
            .toStrictEqual(linkedListOf(2, 1))
    })

    it('Reverse empty list', (): void => {
        expect(reverseList(linkedListOf()))
            .toStrictEqual(linkedListOf())
    })

    it('Reverse null list', (): void => {
        expect(reverseList(null))
            .toStrictEqual(null)
    })
})
