import {TreeNode} from '../../common/TreeNode'
import {arraysAreEqual} from "../../common/array-utils";

export {leafSimilar, TreeNode}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return arraysAreEqual(getLeafSequence(root1), getLeafSequence(root2))
}

function getLeafSequence(node: TreeNode | null): number[] {
    if (!node) {
        return []
    }

    if (node.left === null && node.right === null) {
        return [node.val]
    }

    return [...getLeafSequence(node.left), ...getLeafSequence(node.right)]
}
