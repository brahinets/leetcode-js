import {kthLargestLevelSum} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('2583. Kth Largest Sum in a Binary Tree', (): void => {

    it('Full tree', (): void => {
        expect(kthLargestLevelSum(arrayToTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), 2))
            .toBe(13)
    })

    it('Side tree', (): void => {
        expect(kthLargestLevelSum(arrayToTree([1, 2, null, 3]), 1))
            .toBe(3)
    })

    it('No level', (): void => {
        expect(kthLargestLevelSum(arrayToTree([5, 8, 9, 2, 1, 3, 7]), 4))
            .toBe(-1)
    })
})
