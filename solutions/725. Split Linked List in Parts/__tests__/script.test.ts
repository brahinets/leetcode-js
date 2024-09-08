import {splitListToParts} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('725. Split Linked List in Parts', (): void => {

    it('Has empty', (): void => {
        expect(splitListToParts(linkedListOf(1, 2, 3), 5))
            .toEqual([linkedListOf(1), linkedListOf(2), linkedListOf(3), linkedListOf(), linkedListOf()])
    })

    it('Break down', (): void => {
        expect(splitListToParts(linkedListOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 3))
            .toEqual([linkedListOf(1, 2, 3, 4), linkedListOf(5, 6, 7), linkedListOf(8, 9, 10)])
    })
})
