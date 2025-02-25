import {TreeNode} from "../../common/TreeNode"

export {TreeNode, getMinimumDifference}

function getMinimumDifference(root: TreeNode | null): number {
    const values: number[] = collectValues(root)
        .sort((a: number, b: number): number => a - b)

    let min: number = values[1] - values[0]
    for (let i: number = 1; i < values.length; i++) {
        min = Math.min(min, values[i] - values[i - 1])
    }

    return min
}

function collectValues(root: TreeNode | null): number[] {
    if (!root) {
        return []
    } else {
        return [root.val, ...collectValues(root.left), ...collectValues(root.right)]
    }
}
