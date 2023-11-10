export {rightSideView, TreeNode}
import {TreeNode} from '../../common/TreeNode'

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = []

    if (!root) {
        return result
    }

    return [root.val, ...rightSideView(root.right ?? root.left)]
}
