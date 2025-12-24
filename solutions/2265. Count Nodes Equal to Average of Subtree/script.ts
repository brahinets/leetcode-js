import {TreeNode} from "../../common/TreeNode"
import {sum} from "../../common/array-utils"

export {TreeNode, averageOfSubtree}

function averageOfSubtree(root: TreeNode | null): number {
    let count: number = 0

    if (root) {
        const values: number[] = collect(root)
        const valuesSum: number = sum(values)
        const average: number = Math.floor(valuesSum / values.length)

        if (average === root.val) {
            count++
        }

        count += averageOfSubtree(root.left) + averageOfSubtree(root.right)
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
