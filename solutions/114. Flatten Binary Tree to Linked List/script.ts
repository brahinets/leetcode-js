import {TreeNode} from "../../common/TreeNode"

export {flatten}

function flatten(root: TreeNode | null): void {
    if (root) {
        flatten(root.left)
        flatten(root.right)

        const leftSubtree: TreeNode | null = root.left
        const rightSubtree: TreeNode | null = root.right

        root.left = null
        root.right = leftSubtree

        let current: TreeNode = root

        while (current.right) {
            current = current.right
        }

        current.right = rightSubtree
    }
}
