import {insertGreatestCommonDivisors} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('2807. Insert Greatest Common Divisors in Linked List', (): void => {
    it('Long list', (): void => {
        expect(insertGreatestCommonDivisors(linkedListOf(18, 6, 10, 3)))
            .toEqual(linkedListOf(18, 6, 6, 2, 10, 1, 3))
    })

    it('Short list', (): void => {
        expect(insertGreatestCommonDivisors(linkedListOf(7)))
            .toEqual(linkedListOf(7))
    })
})
