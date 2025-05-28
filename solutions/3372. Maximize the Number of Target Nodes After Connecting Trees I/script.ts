import {arrayOf} from "../../common/array-factories"

export {maxTargetNodes}

function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    const tree1: number[][] = buildAdjList(edges1, edges1.length + 1)
    const tree2: number[][] = buildAdjList(edges2, edges2.length + 1)

    const withinK1: number[] = []
    for (let i: number = 0; i < edges1.length + 1; i++) {
        withinK1.push(countWithinK(tree1, i, k))
    }

    const withinK2: number[] = []
    for (let i: number = 0; i < edges2.length + 1; i++) {
        withinK2.push(countWithinK(tree2, i, k - 1))
    }


    const result: number[] = []
    for (let i: number = 0; i < edges1.length + 1; i++) {
        let max: number = 0

        for (let j = 0; j < edges2.length + 1; j++) {
            max = Math.max(max, withinK1[i] + withinK2[j])
        }

        result.push(max)
    }

    return result
}

function buildAdjList(edges: number[][], size: number): number[][] {
    const adj: number[][] = arrayOf([], size)

    for (const [u, v] of edges) {
        adj[u].push(v)
        adj[v].push(u)
    }

    return adj
}

function countWithinK(adjacency: number[][], start: number, k: number): number {
    if (k < 0) {
        return 0
    }

    const n: number = adjacency.length
    const visited: boolean[] = arrayOf(false, n)
    const queue: [number, number][] = [[start, 0]]

    visited[start] = true

    let count: number = 0

    while (queue.length > 0) {
        const [node, dist] = queue.shift()!

        if (dist > k) {
            continue
        }

        count++

        for (const nei of adjacency[node]) {
            if (!visited[nei]) {
                visited[nei] = true
                queue.push([nei, dist + 1])
            }
        }
    }
    return count
}
