import {TreeNode} from "../../common/TreeNode"

export {preorderTraversal}

function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    if (root !== null) {
        result.push(root.val)
        result.push(...preorderTraversal(root.left))
        result.push(...preorderTraversal(root.right))
    }

    return result
}
