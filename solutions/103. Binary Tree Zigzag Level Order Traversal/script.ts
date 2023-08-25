import {TreeNode} from '../../common/TreeNode'

export {zigzagLevelOrder, TreeNode}

const zigzagLevelOrder = function (root: TreeNode | null): number[][] {
    const result: number[][] = []

    collect(root, 0, result)

    return result
}

const collect = function (node: TreeNode | null, level: number, result: number[][]): void {
    if (!node) {
        return
    }

    if (result.length <= level) {
        result.push([])
    }

    if (level % 2 === 0) {
        result[level].push(node.val)
    } else {
        result[level].unshift(node.val)
    }

    collect(node.left, level + 1, result)
    collect(node.right, level + 1, result)
}
