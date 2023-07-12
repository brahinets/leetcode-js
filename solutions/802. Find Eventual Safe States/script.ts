export {eventualSafeNodes};

function eventualSafeNodes(graphMatrix: number[][]): number[] {
    const result: number[] = [];

    const graph: Map<number, Set<number>> = buildGraph(graphMatrix);
    for (const node of graph) {
        if (safeNode(node[1], graph)) {
            result.push(node[0]);
        }
    }

    return result.sort((a: number, b: number): number => a - b);
}

function safeNode(neighbours: Set<number>, graph: Map<number, Set<number>>): boolean {
    for (const n of neighbours) {
        const next: Set<number> | undefined = graph.get(n);
        const isTerminal: boolean = next === undefined || next.size === 0;
        if (!isTerminal) {
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
