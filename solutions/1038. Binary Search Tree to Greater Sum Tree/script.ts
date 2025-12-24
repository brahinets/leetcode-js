import {TreeNode} from "../../common/TreeNode"
import {sum} from "../../common/array-utils"

export {TreeNode, bstToGst}

function bstToGst(root: TreeNode | null): TreeNode | null {
    const values: number[] = collect(root)

    traverse(root, values)

    return root
}

function traverse(root: TreeNode | null, values: number[]): TreeNode | null {
    if (root) {
        root.val = findGreatValue(values, root.val)

        if (root.right) {
            traverse(root.right, values)
        }

        if (root.left) {
            traverse(root.left, values)
        }
    }

    return root
}

function findGreatValue(values: number[], value: number): number {
    return value + sum(values.filter((v: number): boolean => v > value))
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
