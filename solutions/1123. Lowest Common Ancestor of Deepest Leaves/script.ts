import {TreeNode} from "../../common/TreeNode"

export {lcaDeepestLeaves}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    return dfs(root)[0]
}

function dfs(root: TreeNode | null): [TreeNode | null, number] {
    if (root == null) {
        return [null, 0]
    }

    const left: [TreeNode | null, number] = dfs(root.left)
    const right: [TreeNode | null, number] = dfs(root.right)

    if (left[1] > right[1]) {
        return [left[0], left[1] + 1]
    }

    if (left[1] < right[1]) {
        return [right[0], right[1] + 1]
    }

    return [root, left[1] + 1]
}
