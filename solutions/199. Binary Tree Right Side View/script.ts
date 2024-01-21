import {last} from "../../common/array-utils";
import {TreeNode} from '../../common/TreeNode'

export {rightSideView, TreeNode}

function rightSideView(root: TreeNode | null): number[] {
    return [...collect(root, 0).values()]
        .map((values: number[]) => last(values)!)
}

function collect(node: TreeNode | null, layer: number): Map<number, number[]> {
    const result: Map<number, number[]> = new Map<number, number[]>()

    if (!node) {
        return result
    }

    result.set(layer, [node.val])

    const left: Map<number, number[]> = collect(node.left, layer + 1)
    for (const [level, values] of left.entries()) {
        result.set(level, [...(result.get(level) ?? []), ...values])
    }

    const right: Map<number, number[]> = collect(node.right, layer + 1)
    for (const [level, values] of right.entries()) {
        result.set(level, [...(result.get(level) ?? []), ...values])
    }

    return result
}
