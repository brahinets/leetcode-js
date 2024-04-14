import {TreeNode} from '../../common/TreeNode'

export {sumOfLeftLeaves, TreeNode}

function sumOfLeftLeaves(root: TreeNode | null): number {
    return collect(root, false, 0)
}

function collect(node: TreeNode | null, isLeft: boolean, sum: number): number {
    if (!node) {
        return sum
    }

    if (isLeft && !node.left && !node.right) {
        sum += node.val
    }

    sum = collect(node.left, true, sum)
    sum = collect(node.right, false, sum)

    return sum
}
