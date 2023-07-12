export {eventualSafeNodes};

function eventualSafeNodes(graphMatrix: number[][]): number[] {
    const result: number[] = [];

    const graph: Map<number, Set<number>> = buildGraph(graphMatrix);
    for (const node of graph) {
        if (safeNode(node[1], graph, new Set<number>([node[0]]))) {
            result.push(node[0]);
        }
    }

    return result.sort((a: number, b: number): number => a - b);
}

function safeNode(neighbours: Set<number>, graph: Map<number, Set<number>>, visited: Set<number>): boolean {
    if (neighbours === undefined || neighbours.size === 0) {
        return true;
    }

    for (const n of neighbours) {
        if (visited.has(n)) {
            return false;
        }

        if (!safeNode(graph.get(n) ?? new Set<number>(), graph, new Set<number>([...visited, n]))) {
            return false;
        }
    }

    return true;
}

function buildGraph(root: number[][]): Map<number, Set<number>> {
    const graph: Map<number, Set<number>> = new Map<number, Set<number>>();

    for (let from: number = 0; from < root.length; from++) {
        graph.set(from, new Set<number>());
        for (const to of root[from]) {
            graph.get(from)?.add(to);
        }
    }

    return graph;
}
