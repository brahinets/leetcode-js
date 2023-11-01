import {TreeNode} from "../../common/TreeNode"
import {count} from "../../common/array-utils"

export {TreeNode, findMode}

function findMode(root: TreeNode | null): number[] {
    const values: number[] = collect(root)
    const counts: Map<number, number> = count(values)
    const maxCount: number = Math.max(...counts.values())

    return [...counts.entries()]
        .filter(([, count]: [number, number]): boolean => maxCount === count)
        .map(([value]: [number, number]): number => value)
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
