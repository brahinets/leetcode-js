import {TreeNode} from "../../common/TreeNode"

export {TreeNode, pseudoPalindromicPaths}

function pseudoPalindromicPaths(root: TreeNode): number {
    return countPseudoPalindromicPaths(root, [])
}

function countPseudoPalindromicPaths(node: TreeNode | null, pathElementsWithoutPair: number[]): number {
    if (!node) {
        return 0
    }

    const currentPath: number[] = [...pathElementsWithoutPair]
    if (!currentPath.includes(node.val)) {
        currentPath.push(node.val)
    } else {
        const index: number = currentPath.indexOf(node.val)
        currentPath.splice(index, 1)
    }

    const leaveNode: boolean = !node.left && !node.right
    if (leaveNode) {
        return currentPath.length <= 1 ? 1 : 0
    }

    return countPseudoPalindromicPaths(node.left, currentPath) + countPseudoPalindromicPaths(node.right, currentPath)
}
