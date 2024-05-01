import {
    DirectedUnweightedGraph,
    DirectedWeightedGraph,
    UndirectedUnweightedGraph,
    UndirectedWeightedGraph
} from "../Graph"

describe('Directed Weighted Graph', (): void => {
    it('Source node', (): void => {
        const graph: DirectedWeightedGraph = new DirectedWeightedGraph()
        graph.addEdge(1, 2, 3)

        const neighbours1: Map<number, number> = graph.getNeighbours(1)
        expect(neighbours1.size).toBe(1)
        expect(neighbours1.has(2)).toBe(true)
        expect(neighbours1.get(2)).toBe(3)
    })

    it('Destination node', (): void => {
        const graph: DirectedWeightedGraph = new DirectedWeightedGraph()
        graph.addEdge(1, 2, 3)

        const neighbours3: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours3.size).toBe(0)
    })
})

describe('Directed Unweighted Graph', (): void => {
    it('Source node', (): void => {
        const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()
        graph.addEdge(1, 2)

        const neighbours1: Map<number, number> = graph.getNeighbours(1)
        expect(neighbours1.size).toBe(1)
        expect(neighbours1.has(2)).toBe(true)
        expect(neighbours1.get(2)).toBe(1)
    })

    it('Destination node', (): void => {
        const graph: DirectedUnweightedGraph = new DirectedUnweightedGraph()
        graph.addEdge(1, 2)

        const neighbours2: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours2.size).toBe(0)
    })
})

describe('Undirected Weighted Graph', (): void => {
    it('Source node', (): void => {
        const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()
        graph.addEdge(1, 2, 3)

        const neighbours1: Map<number, number> = graph.getNeighbours(1)
        expect(neighbours1.size).toBe(1)
        expect(neighbours1.has(2)).toBe(true)
        expect(neighbours1.get(2)).toBe(3)
    })

    it('Destination node', (): void => {
        const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()
        graph.addEdge(1, 2, 3)

        const neighbours3: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours3.size).toBe(1)
        expect(neighbours3.has(1)).toBe(true)
        expect(neighbours3.get(1)).toBe(3)
    })

    it('Middle node', (): void => {
        const graph: UndirectedWeightedGraph = new UndirectedWeightedGraph()
        graph.addEdge(1, 2, 3)
        graph.addEdge(2, 3, 4)

        const neighbours2: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours2.size).toBe(2)
        expect(neighbours2.has(1)).toBe(true)
        expect(neighbours2.get(1)).toBe(3)
        expect(neighbours2.has(3)).toBe(true)
        expect(neighbours2.get(3)).toBe(4)
    })
})

describe('Undirected Unweighted Graph', (): void => {
    it('Source node', (): void => {
        const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
        graph.addEdge(1, 2)

        const neighbours1: Map<number, number> = graph.getNeighbours(1)
        expect(neighbours1.size).toBe(1)
        expect(neighbours1.has(2)).toBe(true)
        expect(neighbours1.get(2)).toBe(1)
    })

    it('Destination node', (): void => {
        const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
        graph.addEdge(1, 2)

        const neighbours3: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours3.size).toBe(1)
        expect(neighbours3.has(1)).toBe(true)
        expect(neighbours3.get(1)).toBe(1)
    })

    it('Middle node', (): void => {
        const graph: UndirectedUnweightedGraph = new UndirectedUnweightedGraph()
        graph.addEdge(1, 2)
        graph.addEdge(2, 3)

        const neighbours1: Map<number, number> = graph.getNeighbours(1)
        expect(neighbours1.size).toBe(1)
        expect(neighbours1.has(2)).toBe(true)
        expect(neighbours1.get(2)).toBe(1)

        const neighbours2: Map<number, number> = graph.getNeighbours(2)
        expect(neighbours2.size).toBe(2)
        expect(neighbours2.has(1)).toBe(true)
        expect(neighbours2.get(1)).toBe(1)
        expect(neighbours2.has(3)).toBe(true)
        expect(neighbours2.get(3)).toBe(1)

        const neighbours3: Map<number, number> = graph.getNeighbours(3)
        expect(neighbours3.size).toBe(1)
        expect(neighbours3.has(2)).toBe(true)
        expect(neighbours3.get(2)).toBe(1)
    })
})
