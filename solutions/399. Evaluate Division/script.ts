export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: Map<string, Map<string, number>> = mapGraph(equations, values);

    return queries.map((q: string[]): number => dfs(q[0], q[1], [], graph));
}

function mapGraph(equations: string[][], values: number[]): Map<string, Map<string, number>> {
    const graph: Map<string, Map<string, number>> = new Map<string, Map<string, number>>();

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i];

        const ba: Map<string, number> = graph.get(b) ?? new Map<string, number>();
        ba.set(a, values[i])
        graph.set(b, ba);

        const ab: Map<string, number> = graph.get(a) ?? new Map<string, number>();
        ab.set(b, 1 / values[i])
        graph.set(a, ab);
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
    for (const n of map) {
        if (visited.includes(n[0])) {
            continue;
        }

        const res: number = dfs(n[0], d, [...visited, n[0]], graph) * (graph.get(n[0])?.get(c) ?? 0);
        if (res > 0) {
            return res;
        }
    }

    return -1;
}
