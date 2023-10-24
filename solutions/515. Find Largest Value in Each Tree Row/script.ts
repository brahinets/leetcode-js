import {TreeNode} from "../../common/TreeNode"

export {TreeNode, maxLevelSum}

function maxLevelSum(root: TreeNode | null): number[] {
    const levelsMax: Map<number, number> = new Map<number, number>()
    collect(root, 0, levelsMax)

    return [...levelsMax.values()]
}

function collect(node: TreeNode | null, level: number, levelsMax: Map<number, number>): void {
    if (node) {
        const localMax: number | undefined = levelsMax.get(level)
        levelsMax.set(level, localMax ? Math.max(localMax, node.val) : node.val)

        collect(node.left, level + 1, levelsMax)
        collect(node.right, level + 1, levelsMax)
    }
}
