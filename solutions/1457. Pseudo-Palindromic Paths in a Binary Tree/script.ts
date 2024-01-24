import {TreeNode} from "../../common/TreeNode"
import {count} from "../../common/array-utils"

export {TreeNode, pseudoPalindromicPaths}

function pseudoPalindromicPaths(root: TreeNode): number {
    return countPseudoPalindromicPaths(root, [])
}

function countPseudoPalindromicPaths(node: TreeNode | null, parentPath: number[]): number {
    if (!node) {
        return 0
    }

    const currentPath: number[] = [...parentPath, node.val]

    const leaveNode: boolean = !node.left && !node.right
    if (leaveNode) {
        return isPseudoPalindromic(currentPath) ? 1 : 0
    }

    return countPseudoPalindromicPaths(node.left, currentPath) + countPseudoPalindromicPaths(node.right, currentPath)
}

function isPseudoPalindromic(path: number[]): boolean {
    const counts: Map<number, number> = count(path)

    const oddCounts: number = Array.from(counts.values())
        .filter((count: number): boolean => count % 2 === 1)
        .length

    return oddCounts <= 1
}
