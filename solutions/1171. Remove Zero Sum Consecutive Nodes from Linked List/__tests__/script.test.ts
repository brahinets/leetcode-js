import {removeZeroSumSublists} from "../script"
import {linkedListOf} from "../../../common/list-factories"

describe('1171. Remove Zero Sum Consecutive Nodes from Linked List', (): void => {

    it('Keep end', (): void => {
        expect(removeZeroSumSublists(linkedListOf(1, 2, -3, 3, 1)))
            .toEqual(linkedListOf(3, 1))
    })

    it('Keep miidle', (): void => {
        expect(removeZeroSumSublists(linkedListOf(1, 2, 3, -3, 4)))
            .toEqual(linkedListOf(1, 2, 4))
    })

    it('Keep start', (): void => {
        expect(removeZeroSumSublists(linkedListOf(1, 2, 3, -3, -2)))
            .toEqual(linkedListOf(1))
    })
})
