import {ListNode, reorderList} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('143. Reorder List', (): void => {
    it('Reorder null list', (): void => {
        const head: ListNode | null = null
        reorderList(head)

        expect(head).toBe(null)
    })

    it('Reorder empty list', (): void => {
        const head: ListNode | null = linkedListOf()
        reorderList(head)

        expect(head).toStrictEqual(linkedListOf())
    })

    it('Reorder even-size list', (): void => {
        const head: ListNode | null = linkedListOf(1, 2, 3, 4)
        reorderList(head)

        expect(head).toStrictEqual(linkedListOf(1, 4, 2, 3))
    })

    it('Reorder odd-size list', (): void => {
        const head: ListNode | null = linkedListOf(1, 2, 3, 4, 5)
        reorderList(head)

        expect(head).toStrictEqual(linkedListOf(1, 5, 2, 4, 3))
    })
})
