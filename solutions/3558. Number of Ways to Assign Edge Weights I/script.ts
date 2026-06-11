export {assignEdgeWeights}

const MODULO: number = 1_000_000_007

function assignEdgeWeights(edges: number[][]): number {
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

    const maximumDepth: number = findMaximumDepth(adjacency, numberOfNodes)

    return modularPower(2, maximumDepth - 1, MODULO)
}

function findMaximumDepth(adjacency: number[][], numberOfNodes: number): number {
    const visited: boolean[] = new Array<boolean>(numberOfNodes + 1).fill(false)
    let queue: number[] = [1]
    visited[1] = true
    let depth: number = 0

    while (queue.length > 0) {
        const nextQueue: number[] = []

        for (const node of queue) {
            for (const neighbor of adjacency[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    nextQueue.push(neighbor)
                }
            }
        }

        if (nextQueue.length > 0) {
            depth++
        }

        queue = nextQueue
    }

    return depth
}

function modularPower(base: number, exponent: number, modulo: number): number {
    const bigModulo: bigint = BigInt(modulo)
    let result: bigint = 1n
    let currentBase: bigint = BigInt(base) % bigModulo
    let remainingExponent: number = exponent

    while (remainingExponent > 0) {
        if (remainingExponent % 2 === 1) {
            result = (result * currentBase) % bigModulo
        }

        currentBase = (currentBase * currentBase) % bigModulo
        remainingExponent = Math.floor(remainingExponent / 2)
    }

    return Number(result)
}
