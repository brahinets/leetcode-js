import {TreeNode} from '../../common/TreeNode'

export {distributeCoins}

function distributeCoins(root: TreeNode | null): number {
    const [, moves] = dfs(root)

    return moves
}

function dfs(node: TreeNode | null): [number, number] {
    let moves: number = 0

    if (!node) {
        return [0, 0]
    }

    const [leftExcess,leftMoves]: [number, number] = dfs(node.left)
    const [rightExcess,rightMoves]: [number, number] = dfs(node.right)

    moves += leftMoves + rightMoves + Math.abs(rightExcess) + Math.abs(leftExcess)

    return [node.val + leftExcess + rightExcess - 1, moves]
}
