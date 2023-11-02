import {TreeNode} from "../../common/TreeNode"

export {TreeNode, averageOfSubtree}

function averageOfSubtree(root: TreeNode | null): number {
    let count: number = 0

    if (root) {
        const values: number[] = collect(root)
        const sum: number = values.reduce((sum: number, value: number): number => sum + value, 0)
        const average: number = Math.floor(sum / values.length)

        count += values.filter((value: number): boolean => value === average).length
        count += averageOfSubtree(root.left) + averageOfSubtree(root.left)
    }

    return count
}

function collect(node: TreeNode | null): number[] {
    const values: number[] = []

    if (node) {
        values.push(node.val)

        values.push(...collect(node.left))
        values.push(...collect(node.right))
    }

    return values
}
