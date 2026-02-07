import { cloneGraph, _Node } from '../script'


describe('133. Clone Graph', (): void => {

    it('Clones a 4-node cyclic graph', (): void => {
        const adjList: number[][] = [[2, 4], [1, 3], [2, 4], [1, 3]]
        const original: _Node | null = buildGraph(adjList)
        const cloned: _Node | null = cloneGraph(original)

        expect(graphToAdjList(cloned))
            .toEqual(adjList)
        expect(cloned).not
            .toBe(original)
    })

    it('Clones a single node with no neighbors', (): void => {
        const original: _Node = new _Node(1)
        const cloned: _Node | null = cloneGraph(original)

        expect(cloned).not
            .toBeNull()
        expect(cloned!.val)
            .toBe(1)
        expect(cloned!.neighbors)
            .toEqual([])
        expect(cloned).not
            .toBe(original)
    })

    it('Returns null for null input', (): void => {
        const cloned: _Node | null = cloneGraph(null)
        expect(cloned)
            .toBeNull()
    })

    it('Clones two bidirectionally connected nodes', (): void => {
        const adjList: number[][] = [[2], [1]]
        const original: _Node | null = buildGraph(adjList)
        const cloned: _Node | null = cloneGraph(original)

        expect(graphToAdjList(cloned))
            .toEqual(adjList)
        expect(cloned).not
            .toBe(original)
    })
})

function buildGraph(adjList: number[][]): _Node | null {
    if (adjList.length === 0) {
        return null
    }

    const nodes: Map<number, _Node> = new Map<number, _Node>()
    for (let i: number = 1; i <= adjList.length; i++) {
        nodes.set(i, new _Node(i))
    }

    for (let i: number = 0; i < adjList.length; i++) {
        const node: _Node = nodes.get(i + 1)!
        for (const neighborVal of adjList[i]) {
            node.neighbors.push(nodes.get(neighborVal)!)
        }
    }

    return nodes.get(1)!
}

function graphToAdjList(node: _Node | null): number[][] {
    if (node === null) {
        return []
    }

    const result: number[][] = []
    const visited: Set<number> = new Set<number>()
    const queue: _Node[] = [node]
    const nodeMap: Map<number, _Node> = new Map<number, _Node>()

    while (queue.length > 0) {
        const curr: _Node = queue.shift()!
        if (visited.has(curr.val)) continue
        visited.add(curr.val)
        nodeMap.set(curr.val, curr)

        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor)
            }
        }
    }

    const sortedVals: number[] = Array.from(nodeMap.keys()).sort((a: number, b: number): number => a - b)
    for (const val of sortedVals) {
        const neighbors: number[] = nodeMap.get(val)!.neighbors.map((n: _Node): number => n.val).sort((a: number, b: number): number => a - b)
        result.push(neighbors)
    }

    return result
}
