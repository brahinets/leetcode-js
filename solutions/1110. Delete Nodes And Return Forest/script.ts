import {TreeNode} from "../../common/TreeNode"

export {TreeNode, delNodes}

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const toDelete: Set<number> = new Set<number>(to_delete)
    const res: Array<TreeNode | null> = []

    function dfs(node: TreeNode | null, isRoot: boolean): TreeNode | null {
        if (!node) {
            return null
        }

        const deleted: boolean = toDelete.has(node.val)

        if (isRoot && !deleted) {
            res.push(node)
        }

        node.left = dfs(node.left, deleted)
        node.right = dfs(node.right, deleted)

        return deleted ? null : node
    }

    dfs(root, true)

    return res
}
