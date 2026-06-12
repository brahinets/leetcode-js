import {arrayOf, arrayOfZeros} from '../../common/array-factories'

export {assignEdgeWeights}

const MODULO: number = 1_000_000_007

function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
    const numberOfNodes: number = edges.length + 1
    const adjacency: number[][] = []

    for (let node: number = 0; node <= numberOfNodes; node++) {
        adjacency.push([])
    }

    for (const edge of edges) {
        const first: number = edge[0]
        const second: number = edge[1]

        adjacency[first].push(second)
        adjacency[second].push(first)
    }

    const maximumLevel: number = Math.max(1, Math.ceil(Math.log2(numberOfNodes)))
    const depth: number[] = arrayOfZeros(numberOfNodes + 1)
    const ancestors: number[][] = []

    for (let level: number = 0; level <= maximumLevel; level++) {
        ancestors.push(arrayOfZeros(numberOfNodes + 1))
    }

    fillAncestorsAndDepth(adjacency, numberOfNodes, depth, ancestors, maximumLevel)

    const powersOfTwo: number[] = buildPowersOfTwo(numberOfNodes)
    const answer: number[] = []

    for (const query of queries) {
        const first: number = query[0]
        const second: number = query[1]
        const distance: number = computeDistance(first, second, depth, ancestors, maximumLevel)

        if (distance === 0) {
            answer.push(0)
        } else {
            answer.push(powersOfTwo[distance - 1])
        }
    }

    return answer
}

function fillAncestorsAndDepth(
    adjacency: number[][],
    numberOfNodes: number,
    depth: number[],
    ancestors: number[][],
    maximumLevel: number,
): void {
    const visited: boolean[] = arrayOf(false, numberOfNodes + 1)
    let queue: number[] = [1]
    visited[1] = true
    ancestors[0][1] = 0
    depth[1] = 0

    while (queue.length > 0) {
        const nextQueue: number[] = []

        for (const node of queue) {
            for (const neighbor of adjacency[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    depth[neighbor] = depth[node] + 1
                    ancestors[0][neighbor] = node
                    nextQueue.push(neighbor)
                }
            }
        }

        queue = nextQueue
    }

    for (let level: number = 1; level <= maximumLevel; level++) {
        for (let node: number = 1; node <= numberOfNodes; node++) {
            ancestors[level][node] = ancestors[level - 1][ancestors[level - 1][node]]
        }
    }
}

function computeDistance(
    first: number,
    second: number,
    depth: number[],
    ancestors: number[][],
    maximumLevel: number,
): number {
    const lowestCommonAncestor: number = findLowestCommonAncestor(first, second, depth, ancestors, maximumLevel)

    return depth[first] + depth[second] - 2 * depth[lowestCommonAncestor]
}

function findLowestCommonAncestor(
    first: number,
    second: number,
    depth: number[],
    ancestors: number[][],
    maximumLevel: number,
): number {
    let deeper: number = first
    let shallower: number = second

    if (depth[deeper] < depth[shallower]) {
        const temporary: number = deeper
        deeper = shallower
        shallower = temporary
    }

    let difference: number = depth[deeper] - depth[shallower]

    for (let level: number = 0; level <= maximumLevel; level++) {
        if ((difference >> level) & 1) {
            deeper = ancestors[level][deeper]
        }
    }

    if (deeper === shallower) {
        return deeper
    }

    for (let level: number = maximumLevel; level >= 0; level--) {
        if (ancestors[level][deeper] !== ancestors[level][shallower]) {
            deeper = ancestors[level][deeper]
            shallower = ancestors[level][shallower]
        }
    }

    return ancestors[0][deeper]
}

function buildPowersOfTwo(size: number): number[] {
    const powers: number[] = arrayOf(1, Math.max(size, 1))

    for (let index: number = 1; index < powers.length; index++) {
        powers[index] = (powers[index - 1] * 2) % MODULO
    }

    return powers
}
