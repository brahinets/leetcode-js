import {TreeNode} from "./TreeNode";

export {treeToGraph, TreeNode}

function treeToGraph(root: TreeNode): Map<number, Set<number>> {
    return buildGraph(root, new Map<number, Set<number>>())
}

function buildGraph(root: TreeNode | null, graph: Map<number, Set<number>>): Map<number, Set<number>> {
    if (!root) {
        return graph
    }

    if (root.left) {
        graph.set(root.val, new Set<number>([...graph.get(root.val) ?? [], root.left.val]))
        graph.set(root.left.val, new Set<number>([...graph.get(root.left.val) ?? [], root.val]))
    }

    if (root.right) {
        graph.set(root.val, new Set<number>([...graph.get(root.val) ?? [], root.right.val]))
        graph.set(root.right.val, new Set<number>([...graph.get(root.right.val) ?? [], root.val]))
    }

    buildGraph(root.left, graph)
    buildGraph(root.right, graph)

    return graph
}
