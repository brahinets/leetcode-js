import {addTwoNumbers} from '../script'

import {linkedListOf} from "../../../common/list-factories"

describe('445. Add Two Numbers II', (): void => {
    it('Zero', (): void => {
        expect(addTwoNumbers(linkedListOf(0), linkedListOf(0)))
            .toStrictEqual(linkedListOf(0))
    })

    it('Same radix', (): void => {
        expect(addTwoNumbers(linkedListOf(2, 4, 3), linkedListOf(5, 6, 4)))
            .toStrictEqual(linkedListOf(8, 0, 7))
    })

    it('Different radix', (): void => {
        expect(addTwoNumbers(linkedListOf(9, 9, 9, 9, 9, 9, 9), linkedListOf(9, 9, 9, 9)))
            .toStrictEqual(linkedListOf(1, 0, 0, 0, 9, 9, 9, 8))
    })
})
