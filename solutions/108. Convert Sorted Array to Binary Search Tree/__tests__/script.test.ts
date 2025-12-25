import {sortedArrayToBST} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('108. Convert Sorted Array to Binary Search Tree', (): void => {
    it('Complex tree', (): void => {
        expect(sortedArrayToBST([-10, -3, 0, 5, 9]))
            .toEqual(arrayToTree([0, -3, 9, -10, null, 5]))
    })

    it('Simple tree', (): void => {
        expect(sortedArrayToBST([1, 3]))
            .toEqual(arrayToTree([3, 1]))
    })
})
