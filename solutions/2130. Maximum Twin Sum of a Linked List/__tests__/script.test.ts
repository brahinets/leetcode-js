import {pairSum} from "../script"
import {linkedListOf} from "../../../common/list-factories"

describe('2130. Maximum Twin Sum of a Linked List', (): void => {
    it('Multiple max sum', (): void => {
        expect(pairSum(linkedListOf(5, 4, 2, 1)))
            .toBe(6)
    })

    it('Single max sum', (): void => {
        expect(pairSum(linkedListOf(4, 2, 2, 3)))
            .toBe(7)
    })

    it('The only max sum', (): void => {
        expect(pairSum(linkedListOf(1, 100000)))
            .toBe(100001)
    })
})
