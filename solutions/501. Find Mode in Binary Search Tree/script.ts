import {TreeNode} from "../../common/TreeNode"
import {count} from "../../common/array-utils";

export {TreeNode, findMode}

function findMode(root: TreeNode | null): number[] {
    const values: [] = []
    collect(root, values)

    const counts: Map<number, number> = count(values);
    const maxCount: number = Math.max(...counts.values())

    return [...counts.entries()]
        .filter(([, count]: [number, number]): boolean => maxCount === count)
        .map(([value]: [number, number]): number => value)
}

function collect(node: TreeNode | null, values: number[]): void {
    if (node) {
        values.push(node.val)

        collect(node.left, values)
        collect(node.right, values)
    }
}
