import {TreeNode} from '../../common/TreeNode'

export {postorderTraversal, TreeNode}

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    if (root !== null) {
        result.push(...postorderTraversal(root.left))
        result.push(...postorderTraversal(root.right))
        result.push(root.val)
    }

    return result
}
