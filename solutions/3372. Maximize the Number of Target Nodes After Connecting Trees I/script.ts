import {arrayOf} from "../../common/array-factories"

export {maxTargetNodes}

function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    const tree1: Map<number, number[]> = buildAdjacency(edges1, edges1.length + 1)
    const tree2: Map<number, number[]> = buildAdjacency(edges2, edges2.length + 1)

    const tree2Profiles: Map<number, number>[] = precomputeDistanceProfiles(tree2, edges2.length + 1, k - 1)

    const result: number[] = []

    for (let i: number = 0; i < edges1.length + 1; i++) {
        const distances: number[] = bfs(tree1, i)
        const frequencies: Map<number, number> = getDistanceFrequency(distances, k)

        let maxTarget: number = 0

        for (let u: number = 0; u < edges2.length + 1; u++) {
            let total: number = 0

            for (const [d1, count1] of frequencies) {
                if (d1 <= k) {
                    total += count1
                }
            }

            const profile: Map<number, number> = tree2Profiles[u]
            for (const [d2, count2] of profile) {
                if (1 + d2 <= k) {
                    total += count2
                }
            }

            if (total > maxTarget) {
                maxTarget = total
            }
        }

        result.push(maxTarget)
    }

    return result
}

function buildAdjacency(edges: number[][], size: number): Map<number, number[]> {
    const adjacency: Map<number, number[]> = new Map<number, number[]>()
    for (let i: number = 0; i < size; i++) {
        adjacency.set(i, [])
    }

    for (const [u, v] of edges) {
        adjacency.get(u)!.push(v)
        adjacency.get(v)!.push(u)
    }

    return adjacency
}

function bfs(adj: Map<number, number[]>, start: number): number[] {
    const n: number = adj.size
    const dist: number[] = arrayOf(Infinity, n)
    const queue: number[] = [start]
    dist[start] = 0

    while (queue.length > 0) {
        const node: number = queue.shift()!

        for (const neighbor of adj.get(node)!) {
            if (dist[neighbor] === Infinity) {
                dist[neighbor] = dist[node] + 1
                queue.push(neighbor)
            }
        }
    }

    return dist
}

function getDistanceFrequency(distances: number[], maxDist: number): Map<number, number> {
    const frequencies: Map<number, number> = new Map<number, number>()

    for (const d of distances) {
        if (d <= maxDist) {
            frequencies.set(d, (frequencies.get(d) ?? 0) + 1)
        }
    }

    return frequencies
}

function precomputeDistanceProfiles(
    tree: Map<number, number[]>,
    size: number,
    maxDist: number
): Map<number, number>[] {
    const profiles: Map<number, number>[] = []

    for (let u: number = 0; u < size; u++) {
        const distance: number[] = bfs(tree, u)
        const profile: Map<number, number> = getDistanceFrequency(distance, maxDist)

        profiles.push(profile)
    }

    return profiles
}
