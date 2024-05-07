import {doubleIt} from "../script"
import {linkedListOf} from "../../../common/list-factories"

describe('2816. Double a Number Represented as a Linked List', (): void => {

    it('Zero', (): void => {
        expect(doubleIt(linkedListOf(0)))
            .toEqual(linkedListOf(0))
    })

    it('Same order', (): void => {
        expect(doubleIt(linkedListOf(1, 8, 9)))
            .toEqual(linkedListOf(3, 7, 8))
    })

    it('Increase order', (): void => {
        expect(doubleIt(linkedListOf(9, 9, 9)))
            .toEqual(linkedListOf(1, 9, 9, 8))
    })

    it('Big number', (): void => {
        expect(doubleIt(linkedListOf(9, 1, 9, 5, 0, 5, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9)))
            .toEqual(linkedListOf(1, 8, 3, 9, 0, 1, 0, 3, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8))
    })
})
