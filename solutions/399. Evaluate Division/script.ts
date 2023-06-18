export {calcEquation}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph: any = mapGraph(equations, values);

    return queries.map((q: string[]): number => dfs(q[0], q[1], [], graph));
}

function mapGraph(equations: string[][], values: number[]): any {
    const graph: any = {};

    for (let i: number = 0; i < equations.length; i++) {
        const [a, b]: string[] = equations[i];

        if (!graph[a]) {
            graph[a] = {};
        }
        if (!graph[b]) {
            graph[b] = {};
        }

        graph[b][a] = values[i];
        graph[a][b] = 1 / values[i];
    }

    return graph;
}

function dfs(c: string, d: string, visited: string[], graph: any): number {
    if (!graph[c] || !graph[d]) {
        return -1;
    }

    if (c === d) {
        return 1;
    }

    for (const n in graph[c]) {
        if (visited.includes(n)) {
            continue;
        }

        const res: number = dfs(n, d, [...visited, n], graph) * graph[n][c];
        if (res > 0) {
            return res;
        }
    }

    return -1;
}
