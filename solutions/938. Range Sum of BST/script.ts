import {TreeNode} from "../../common/TreeNode"

export {TreeNode, rangeSumBST}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    return collectValues(root)
        .filter((value: number) => value >= low && value <= high)
        .reduce((sum: number, value: number) => sum + value, 0)
}

function collectValues(root: TreeNode | null): number[] {
    if (!root) {
        return []
    } else {
        return [root.val, ...collectValues(root.left), ...collectValues(root.right)]
    }
}
