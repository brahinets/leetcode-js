import {TreeNode} from "../../common/TreeNode"
import {sum} from "../../common/array-utils"

export {TreeNode, rangeSumBST}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let matches: number[] = collectValues(root)
        .filter((value: number): boolean => value >= low && value <= high)

    return sum(matches)
}

function collectValues(root: TreeNode | null): number[] {
    if (!root) {
        return []
    } else {
        return [root.val, ...collectValues(root.left), ...collectValues(root.right)]
    }
}
