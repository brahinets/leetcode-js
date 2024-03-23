import {mergeInBetween} from '../script'

import {linkedListOf} from "../../../common/list-factories"


describe('1669. Merge In Between Linked Lists', (): void => {
    it('Merge inside', (): void => {
        expect(mergeInBetween(linkedListOf(10, 1, 13, 6, 9, 5), 3, 4, linkedListOf(1000000, 1000001, 1000002)))
            .toStrictEqual(linkedListOf(10, 1, 13, 1000000, 1000001, 1000002, 5))
    })

    it('Merge inside #2', (): void => {
        expect(mergeInBetween(linkedListOf(0, 1, 2, 3, 4, 5, 6), 2, 5, linkedListOf(1000000, 1000001, 1000002, 1000003, 1000004)))
            .toStrictEqual(linkedListOf(0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6))
    })
})
