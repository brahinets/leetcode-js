import {inorderTraversal} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('102. Binary Tree Level Order Traversal', (): void => {
    it('Empty tree', (): void => {
        expect(inorderTraversal(arrayToTree([null])))
            .toEqual([])
    })

    it('Small tree', (): void => {
        expect(inorderTraversal(arrayToTree([1])))
            .toEqual([1])
    })

    it('Big tree', (): void => {
        expect(inorderTraversal(arrayToTree([1, null, 2, 3])))
            .toEqual([1, 3, 2])
    })
})
