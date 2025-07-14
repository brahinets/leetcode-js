import {getDecimalValue} from '../script'
import {linkedListOf} from "../../../common/list-factories";

describe('1290. Convert Binary Number in a Linked List to Integer', (): void => {
    it('Multi digit', (): void => {
        expect(getDecimalValue(linkedListOf(1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1)))
            .toEqual(1365)
    })

    it('Single digit', (): void => {
        expect(getDecimalValue(linkedListOf(1, 0, 1)))
            .toEqual(5)
    })

    it('Zero', (): void => {
        expect(getDecimalValue(linkedListOf(0)))
            .toEqual(0)
    })
})
