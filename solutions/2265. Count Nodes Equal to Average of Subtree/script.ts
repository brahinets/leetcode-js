import { TreeNode } from "../../common/TreeNode"

export { TreeNode, averageOfSubtree }

interface SubtreeSummary {
    sum: number
    count: number
    matchCount: number
}

function averageOfSubtree(root: TreeNode | null): number {
    return summarize(root).matchCount
}

function summarize(node: TreeNode | null): SubtreeSummary {
    if (!node) {
        return { sum: 0, count: 0, matchCount: 0 }
    }

    const left: SubtreeSummary = summarize(node.left)
    const right: SubtreeSummary = summarize(node.right)

    const sum: number = left.sum + right.sum + node.val
    const count: number = left.count + right.count + 1
    const average: number = Math.floor(sum / count)
    const matchCount: number = left.matchCount + right.matchCount + (average === node.val ? 1 : 0)

    return { sum, count, matchCount }
}
