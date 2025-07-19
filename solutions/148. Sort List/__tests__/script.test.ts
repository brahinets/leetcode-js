import {sortList} from '../script'
import {linkedListOf} from "../../../common/list-factories"

describe('148. Sort List', (): void => {
    it('Simple', (): void => {
        expect(sortList(linkedListOf(4, 2, 1, 3)))
            .toEqual(linkedListOf(1, 2, 3, 4))
    })

    it('Has negatives', (): void => {
        expect(sortList(linkedListOf(-1, 5, 3, 4, 0)))
            .toEqual(linkedListOf(-1, 0, 3, 4, 5))
    })

    it('Empty list', (): void => {
        expect(sortList(linkedListOf()))
            .toEqual(linkedListOf())
    })
})
