import {TreeNode} from "../../common/TreeNode"
import {count} from "../../common/array-utils"

export {TreeNode, pseudoPalindromicPaths}

function pseudoPalindromicPaths(root: TreeNode): number {
    return collectPaths(root, [])
        .filter((path: number[]) => isPseudoPalindromic(path))
        .length
}

function collectPaths(node: TreeNode, parentPath: number[]): number [][] {
    const paths: number[][] = []

    if (node.left) {
        paths.push(...collectPaths(node.left, [...parentPath, node.val]))
    }

    if (node.right) {
        paths.push(...collectPaths(node.right, [...parentPath, node.val]))
    }

    if (!node.left && !node.right) {
        paths.push([...parentPath, node.val])
    }

    return paths
}

function isPseudoPalindromic(path: number[]): boolean {
    const counts: Map<number, number> = count(path)

    const oddCounts: number = Array.from(counts.values())
        .filter((count: number): boolean => count % 2 === 1)
        .length

    return oddCounts <= 1
}
