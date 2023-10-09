import {addTwoNumbers} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('2. Add Two Numbers', (): void => {
    it('Zero', (): void => {
        expect(addTwoNumbers(linkedListOf(0), linkedListOf(0)))
            .toStrictEqual(linkedListOf(0))
    })

    it('Same radix', (): void => {
        expect(addTwoNumbers(linkedListOf(2, 4, 3), linkedListOf(5, 6, 4)))
            .toStrictEqual(linkedListOf(7, 0, 8))
    })

    it('Different radix', (): void => {
        expect(addTwoNumbers(linkedListOf(9, 9, 9, 9, 9, 9, 9), linkedListOf(9, 9, 9, 9)))
            .toStrictEqual(linkedListOf(8, 9, 9, 9, 0, 0, 0, 1))
    })
})
