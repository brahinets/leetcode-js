import {reverseBetween} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('92. Reverse Linked List II', (): void => {
    it('Big list', (): void => {
        expect(reverseBetween(linkedListOf(1, 2, 3, 4, 5), 2, 4))
            .toStrictEqual(linkedListOf(1, 4, 3, 2, 5))
    })

    it('Small list', (): void => {
        expect(reverseBetween(linkedListOf(5), 1, 1))
            .toStrictEqual(linkedListOf(5))
    })
})
