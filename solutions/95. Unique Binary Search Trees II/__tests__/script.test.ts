import {generateTrees} from '../script'
import {TreeNode} from "../../../common/TreeNode"

describe('95. Unique Binary Search Trees II', (): void => {
    it('Complex tree', (): void => {
        expect(generateTrees(3))
            .toEqual([
                new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
                new TreeNode(1, null, new TreeNode(3, new TreeNode(2), null)),
                new TreeNode(2, new TreeNode(1), new TreeNode(3)),
                new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), null),
                new TreeNode(3, new TreeNode(2, new TreeNode(1), null), null)
            ])
    })

    it('Simple tree', (): void => {
        expect(generateTrees(1))
            .toEqual([new TreeNode(1)])
    })
})
