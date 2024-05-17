import {TreeNode} from '../../common/TreeNode'

export {removeLeafNodes}

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    if (!root) {
        return null
    }

    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    if (!root.left && !root.right && root.val === target) {
        return null
    }

    return root
}
