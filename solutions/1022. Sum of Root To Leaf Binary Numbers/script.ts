import {TreeNode} from "../../common/TreeNode"

export {sumRootToLeaf}

function sumRootToLeaf(root: TreeNode | null): number {
    return dfs(root, 0)
}

function dfs(node: TreeNode | null, currentValue: number): number {
    if (!node) {
        return 0
    }

    currentValue = currentValue * 2 + node.val

    if (!node.left && !node.right) {
        return currentValue
    }

    return dfs(node.left, currentValue) + dfs(node.right, currentValue)
}
