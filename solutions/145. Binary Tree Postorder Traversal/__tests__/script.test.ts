import {postorderTraversal} from '../script'
import {arrayToTree} from "../../../common/tree-utils"

describe('145. Binary Tree Postorder Traversal', (): void => {
    it('Empty tree', (): void => {
        expect(postorderTraversal(null))
            .toEqual([])
    })

    it('Small tree', (): void => {
        expect(postorderTraversal(arrayToTree([1])))
            .toEqual([1])
    })

    it('Big tree', (): void => {
        expect(postorderTraversal(arrayToTree([1, null, 2, 3])))
            .toEqual([3, 2, 1])
    })
})
