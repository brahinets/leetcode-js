import {TreeNode} from "../../common/TreeNode"
import {arrayOfZeros} from "../../common/array-factories"

export {replaceValueInTree}

const DEEP_TREE: number = 100000

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    const levelSums: number[] = arrayOfZeros(DEEP_TREE)


    calculateLevelSum(root, 0, levelSums)
    replaceValueInTreeInternal(root, 0, 0, levelSums)
    return root
}

function calculateLevelSum(node: TreeNode | null, level: number, levelSums: number[]): void {
    if (node === null) {
        return
    }

    levelSums[level] += node.val
    calculateLevelSum(node.left, level + 1, levelSums)
    calculateLevelSum(node.right, level + 1, levelSums)
}

function replaceValueInTreeInternal(
    node: TreeNode | null,
    siblingSum: number,
    level: number,
    levelSums: number[]
): void {
    if (node === null) {
        return
    }

    const leftChildVal: number = node.left?.val ?? 0
    const rightChildVal: number = node.right?.val ?? 0

    if (level === 0 || level === 1) {
        node.val = 0
    } else {
        node.val = levelSums[level] - node.val - siblingSum
    }

    replaceValueInTreeInternal(node.left, rightChildVal, level + 1, levelSums)
    replaceValueInTreeInternal(node.right, leftChildVal, level + 1, levelSums)
}
