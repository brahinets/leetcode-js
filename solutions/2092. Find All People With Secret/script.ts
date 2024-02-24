export {findAllPeople}

function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    let graph: Graph = new Graph(meetings)

    const awareSince: Map<number, number> = new Map<number, number>()
    awareSince.set(0, 0)
    awareSince.set(firstPerson, 0)

    const leakQueue: number[][] = [[0, 0], [firstPerson, 0]]
    while (leakQueue.length > 0) {
        const [leaker, leakerSince] = leakQueue.pop()!

        for (const [coMeeter, coMeeterAt] of graph.getNeighbours(leaker)) {
            if (coMeeterAt >= leakerSince && (awareSince.get(coMeeter) === undefined || awareSince.get(coMeeter)! > coMeeterAt)) {
                awareSince.set(coMeeter, coMeeterAt)
                leakQueue.push([coMeeter, coMeeterAt])
            }
        }
    }

    return [...awareSince.keys()]
        .sort((a: number, b: number): number => a - b)
}

class Graph {
    private readonly nodes: Map<number, Map<number, number>>

    constructor(edges: number[][]) {
        this.nodes = new Map<number, Map<number, number>>()
        edges.forEach((edge: number[]): void => this.addEdge(edge))
    }

    addEdge(edge: number[]): void {
        const [from, to, distance] = edge

        const toNodes: Map<number, number> = this.nodes.get(from) ?? new Map<number, number>()
        toNodes.set(to, distance)
        this.nodes.set(from, toNodes)

        const fromNodes: Map<number, number> = this.nodes.get(to) ?? new Map<number, number>()
        fromNodes.set(from, distance)
        this.nodes.set(to, fromNodes)
    }

    getNeighbours(from: number): Map<number, number> {
        return this.nodes.get(from) ?? new Map<number, number>()
    }
}
