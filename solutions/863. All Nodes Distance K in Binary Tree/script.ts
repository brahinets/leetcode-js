import {TreeNode} from "../../common/TreeNode";

export {distanceK, TreeNode};

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    if (!root || !target) {
        return [];
    }

    const graph: Map<number, Set<number>> = buildGraph(root, new Map<number, Set<number>>());
    if (!graph.has(target.val)) {
        return [];
    }

    const visited: number[] = [target.val];
    return findNodes(graph, visited, target.val, k);
}

function findNodes(graph: Map<number, Set<number>>, visited: number[], from: number, k: number): number[] {
    const res: number[] = [];

    const neighbours: Set<number> | undefined = graph.get(from);
    if (!neighbours) {
        return res;
    }

    if (k === 0) {
        res.push(from);
    }

    for (const n of neighbours) {
        if (!visited.includes(n)) {
            visited.push(n);
            res.push(...findNodes(graph, visited, n, k - 1));
        }
    }

    return res;
}


function buildGraph(root: TreeNode | null, graph: Map<number, Set<number>>): Map<number, Set<number>> {
    if (!root) {
        return graph;
    }

    if (root.left) {
        graph.set(root.val, new Set<number>([...graph.get(root.val) ?? [], root.left.val]));
        graph.set(root.left.val, new Set<number>([...graph.get(root.left.val) ?? [], root.val]));
    }

    if (root.right) {
        graph.set(root.val, new Set<number>([...graph.get(root.val) ?? [], root.right.val]));
        graph.set(root.right.val, new Set<number>([...graph.get(root.right.val) ?? [], root.val]));
    }

    buildGraph(root.left, graph);
    buildGraph(root.right, graph);

    return graph;
}
