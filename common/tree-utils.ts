import {TreeNode} from "./TreeNode"

export {treeToGraph, TreeNode}
export {arrayToTree}

function treeToGraph(root: TreeNode): Map<number, Set<number>> {
    return buildGraph(root, new Map<number, Set<number>>())
}

function buildGraph(node: TreeNode | null, graph: Map<number, Set<number>>): Map<number, Set<number>> {
    if (!node) {
        return graph
    }

    if (node.left) {
        addNeighbour(graph, node, node.left)
    }

    if (node.right) {
        addNeighbour(graph, node, node.right)
    }

    buildGraph(node.left, graph)
    buildGraph(node.right, graph)

    return graph
}

function addNeighbour(graph: Map<number, Set<number>>, first: TreeNode, second: TreeNode): void {
    if (!graph.has(first.val)) {
        graph.set(first.val, new Set<number>())
    }
    graph.get(first.val)!.add(second.val)

    if (!graph.has(second.val)) {
        graph.set(second.val, new Set<number>())
    }
    graph.get(second.val)!.add(first.val)
}

function arrayToTree(nums: Array<number | null>): TreeNode | null {
    if (nums.length === 0 || nums[0] === null) {
        return null
    }

    const root: TreeNode = new TreeNode(nums[0]!)
    const queue: TreeNode[] = [root]

    let i: number = 1
    while (i < nums.length) {
        const current: TreeNode = queue.shift()!

        const leftVal: number | null = nums[i++]
        if (leftVal != null) {
            current.left = new TreeNode(leftVal)
            queue.push(current.left)
        }

        const rightVal: number | null = nums[i++]
        if (rightVal != null) {
            current.right = new TreeNode(rightVal)
            queue.push(current.right)
        }
    }

    return root
}
