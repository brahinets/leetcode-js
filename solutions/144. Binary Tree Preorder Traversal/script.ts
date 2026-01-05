import {TreeNode} from "../../common/TreeNode";

export {postorderTraversal}

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []

    if (root !== null) {
        result.push(root.val)
        result.push(...postorderTraversal(root.left))
        result.push(...postorderTraversal(root.right))
    }

    return result
}
