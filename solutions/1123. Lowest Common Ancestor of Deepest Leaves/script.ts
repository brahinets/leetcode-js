import {TreeNode} from "../../common/TreeNode"

export {lcaDeepestLeaves}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    let maxDepth: number = 0
    let lca: TreeNode | null = null

    function dfs(node: TreeNode | null, depth: number): number {
        if (!node) {
            return depth
        }

        const leftDepth = dfs(node.left, depth + 1)
        const rightDepth = dfs(node.right, depth + 1)

        if (leftDepth === rightDepth && leftDepth >= maxDepth) {
            maxDepth = leftDepth
            lca = node
        }

        return Math.max(leftDepth, rightDepth)
    }

    dfs(root, 0)

    return lca
}
