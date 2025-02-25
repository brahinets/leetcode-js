import {TreeNode} from "../../common/TreeNode"

export {TreeNode, getDirections}

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const path1: string[] = []
    const path2: string[] = []

    findPath(root, startValue, path1)
    findPath(root, destValue, path2)

    while (path1.length > 0 && path2.length > 0 && path1[0] === path2[0]) {
        path1.shift()
        path2.shift()
    }

    return 'U'.repeat(path1.length) + path2.join('')
}

function findPath(node: TreeNode | null, value: number, path: string[]): boolean {
    if (!node) {
        return false
    }

    if (node.val === value) {
        return true
    }

    if (findPath(node.left, value, path)) {
        path.unshift('L')
        return true
    }

    if (findPath(node.right, value, path)) {
        path.unshift('R')
        return true
    }

    return false
}
