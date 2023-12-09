import {TreeNode} from '../../common/TreeNode'

export {inorderTraversal, TreeNode}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    if (root !== null) {
        result.push(...inorderTraversal(root.left))
        result.push(root.val)
        result.push(...inorderTraversal(root.right))
    }

    return result
}
