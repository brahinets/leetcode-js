export { palindromePath }

interface TreeDecomposition {
    readonly parent: number[]
    readonly depth: number[]
    readonly head: number[]
    readonly position: number[]
}

interface ChainEntry {
    readonly node: number
    readonly chainHead: number
}

function palindromePath(
    n: number,
    edges: number[][],
    s: string,
    queries: string[]
): boolean[] {
    const adjacency: number[][] = buildAdjacency(n, edges)
    const decomposition: TreeDecomposition = decomposeTree(adjacency)
    const segmentTree: XorSegmentTree = new XorSegmentTree(n)
    const nodeMasks: number[] = new Array<number>(n).fill(0)

    for (let node: number = 0; node < n; node++) {
        nodeMasks[node] = characterMask(s[node])
        segmentTree.setLeaf(decomposition.position[node], nodeMasks[node])
    }

    const answer: boolean[] = []

    for (const query of queries) {
        const parts: string[] = query.split(' ')

        if (parts[0] === 'update') {
            const node: number = Number(parts[1])
            nodeMasks[node] = characterMask(parts[2])
            segmentTree.setLeaf(decomposition.position[node], nodeMasks[node])
            continue
        }

        const source: number = Number(parts[1])
        const target: number = Number(parts[2])
        const pathMask: number = queryPathXor(
            source,
            target,
            decomposition,
            segmentTree
        )

        answer.push(hasAtMostOneBitSet(pathMask))
    }

    return answer
}

class XorSegmentTree {
    private readonly size: number
    private readonly tree: number[]

    constructor(size: number) {
        this.size = size
        this.tree = new Array<number>(2 * size).fill(0)
    }

    setLeaf(index: number, value: number): void {
        let position: number = index + this.size

        this.tree[position] = value
        position = Math.floor(position / 2)

        while (position >= 1) {
            this.tree[position] =
                this.tree[2 * position] ^ this.tree[2 * position + 1]
            position = Math.floor(position / 2)
        }
    }

    queryXor(left: number, right: number): number {
        let resultMask: number = 0
        let low: number = left + this.size
        let high: number = right + this.size

        while (low < high) {
            if (low % 2 === 1) {
                resultMask ^= this.tree[low]
                low++
            }

            if (high % 2 === 1) {
                high--
                resultMask ^= this.tree[high]
            }

            low = Math.floor(low / 2)
            high = Math.floor(high / 2)
        }

        return resultMask
    }
}

function buildAdjacency(n: number, edges: number[][]): number[][] {
    const adjacency: number[][] = Array.from(
        { length: n },
        (): number[] => []
    )

    for (const edge of edges) {
        adjacency[edge[0]].push(edge[1])
        adjacency[edge[1]].push(edge[0])
    }

    return adjacency
}

function decomposeTree(adjacency: number[][]): TreeDecomposition {
    const nodeCount: number = adjacency.length
    const parent: number[] = new Array<number>(nodeCount).fill(-1)
    const depth: number[] = new Array<number>(nodeCount).fill(0)
    const subtreeSize: number[] = new Array<number>(nodeCount).fill(1)
    const heavyChild: number[] = new Array<number>(nodeCount).fill(-1)
    const head: number[] = new Array<number>(nodeCount).fill(0)
    const position: number[] = new Array<number>(nodeCount).fill(0)
    const order: number[] = []
    const stack: number[] = [0]

    while (stack.length > 0) {
        const node: number = stack.pop() as number
        order.push(node)

        for (const neighbour of adjacency[node]) {
            if (neighbour === parent[node]) {
                continue
            }

            parent[neighbour] = node
            depth[neighbour] = depth[node] + 1
            stack.push(neighbour)
        }
    }

    for (let index: number = order.length - 1; index >= 1; index--) {
        const node: number = order[index]
        const ancestor: number = parent[node]

        subtreeSize[ancestor] += subtreeSize[node]

        if (heavyChild[ancestor] === -1
            || subtreeSize[node] > subtreeSize[heavyChild[ancestor]]) {
            heavyChild[ancestor] = node
        }
    }

    const chainStack: ChainEntry[] = [{ node: 0, chainHead: 0 }]
    let counter: number = 0

    while (chainStack.length > 0) {
        const entry: ChainEntry = chainStack.pop() as ChainEntry
        const node: number = entry.node

        head[node] = entry.chainHead
        position[node] = counter
        counter++

        for (const neighbour of adjacency[node]) {
            if (neighbour === parent[node] || neighbour === heavyChild[node]) {
                continue
            }

            chainStack.push({ node: neighbour, chainHead: neighbour })
        }

        if (heavyChild[node] !== -1) {
            chainStack.push({
                node: heavyChild[node],
                chainHead: entry.chainHead
            })
        }
    }

    return { parent, depth, head, position }
}

function queryPathXor(
    source: number,
    target: number,
    decomposition: TreeDecomposition,
    segmentTree: XorSegmentTree
): number {
    let lower: number = source
    let upper: number = target
    let resultMask: number = 0

    while (decomposition.head[lower] !== decomposition.head[upper]) {
        const lowerHeadDepth: number =
            decomposition.depth[decomposition.head[lower]]
        const upperHeadDepth: number =
            decomposition.depth[decomposition.head[upper]]

        if (lowerHeadDepth < upperHeadDepth) {
            const swap: number = lower
            lower = upper
            upper = swap
        }

        const chainStart: number =
            decomposition.position[decomposition.head[lower]]
        const chainEnd: number = decomposition.position[lower] + 1

        resultMask ^= segmentTree.queryXor(chainStart, chainEnd)
        lower = decomposition.parent[decomposition.head[lower]]
    }

    if (decomposition.position[lower] > decomposition.position[upper]) {
        const swap: number = lower
        lower = upper
        upper = swap
    }

    resultMask ^= segmentTree.queryXor(
        decomposition.position[lower],
        decomposition.position[upper] + 1
    )

    return resultMask
}

function characterMask(character: string): number {
    return 1 << (character.charCodeAt(0) - 'a'.charCodeAt(0))
}

function hasAtMostOneBitSet(mask: number): boolean {
    return (mask & (mask - 1)) === 0
}
