export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Map<string, Map<string, number>> = mapGraph(equations, values);

    return queries.map((q: string[]): number => dfs(q[0], q[1], [], graph));
}

function mapGraph(equations: string[][], values: number[]): Map<string, Map<string, number>> {
    const graph: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i];

        const bToA: Map<string, number> = graph.get(b) ?? new Map<string, number>();
        bToA.set(a, values[i])
        graph.set(b, bToA);

        const aToB: Map<string, number> = graph.get(a) ?? new Map<string, number>();
        aToB.set(b, 1 / values[i])
        graph.set(a, aToB);
    }

    return graph;
}

function dfs(c: string, d: string, visited: string[], graph: Map<string, Map<string, number>>): number {
    if (!graph.has(c) || !graph.has(d)) {
        return -1;
    }

    if (c === d) {
        return 1;
    }

    const map: Map<string, number> = graph.get(c) ?? new Map<string, number>();
    for (const neighbour of map) {
        const neighbourId: string = neighbour[0];
        if (visited.includes(neighbourId)) {
            continue;
        }

        const neighbourToC: number | undefined = graph.get(neighbourId)?.get(c);
        if (!neighbourToC) {
            continue;
        }

        const res: number = neighbourToC * dfs(neighbourId, d, [...visited, neighbourId], graph);
        if (res > 0) {
            return res;
        }
    }

    return -1;
}
