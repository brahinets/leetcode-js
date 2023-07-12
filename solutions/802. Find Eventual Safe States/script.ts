export {eventualSafeNodes};

function eventualSafeNodes(graphMatrix: number[][]): number[] {
    const result: number[] = [];

    for (let nodeId: number = 0; nodeId < graphMatrix.length; nodeId++) {
        if (safeNode(nodeId, graphMatrix, new Set<number>([nodeId]))) {
            result.push(nodeId);
        }
    }

    return result.sort((a: number, b: number): number => a - b);
}

function safeNode(nodeId: number, graphMatrix: number[][], visited: Set<number>): boolean {
    const neighbours: number[] | undefined = graphMatrix[nodeId];

    if (isTerminal(neighbours)) {
        return true;
    }

    for (const n of neighbours) {
        if (visited.has(n)) {
            return false;
        }

        if (!safeNode(n, graphMatrix, new Set<number>([...visited, n]))) {
            return false;
        }
    }

    return true;
}

function isTerminal(neighbours: number[]): boolean {
    return neighbours === undefined || neighbours.length === 0;
}
