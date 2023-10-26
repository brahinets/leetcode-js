import {TreeNode} from "../../common/TreeNode"

export {invertTree, TreeNode}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }

    let newRight: TreeNode | null = null
    if (root.left) {
        newRight = invertTree(root.left)
    }

    let newLeft: TreeNode | null = null
    if (root.right) {
        newLeft = invertTree(root.right)
    }

    root.left = newLeft
    root.right = newRight

    return root
}
