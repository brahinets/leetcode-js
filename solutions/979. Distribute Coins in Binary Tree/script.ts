import {TreeNode} from '../../common/TreeNode'

export {distributeCoins}

function distributeCoins(root: TreeNode | null): number {
    let moves: number = 0

    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        const leftExcess: number = dfs(node.left)
        const rightExcess: number = dfs(node.right)

        moves += Math.abs(rightExcess) + Math.abs(leftExcess)

        return node.val + leftExcess + rightExcess - 1
    }

    dfs(root)

    return moves
}
