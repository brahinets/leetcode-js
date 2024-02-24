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
    private readonly nodes: Map<number, number[][]>

    constructor(edges: number[][]) {
        this.nodes = new Map<number, number[][]>()

        edges.forEach((edge: number[]): void => {
            this.addEdge([edge[0], edge[1], edge[2]])
            this.addEdge([edge[1], edge[0], edge[2]])
        })
    }

    addEdge(edge: number[]): void {
        const [from, to, distance] = edge

        if (!this.nodes.has(from)) {
            this.nodes.set(from, [])
        }

        this.nodes.get(from)!.push([to, distance])
    }

    getNeighbours(from: number): number[][] {
        return this.nodes.get(from) ?? []
    }
}
