import {TreeNode} from '../../common/TreeNode'

export {leafSimilar, TreeNode}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return getLeafSequence(root1).join(',') === getLeafSequence(root2).join(',')
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
