import {DisjointSetUnion} from "../../common/DisjointSetUnion"

export {magnificentSets}

function magnificentSets(n: number, edges: number[][]): number {
    const dsu: DisjointSetUnion = new DisjointSetUnion(n + 1)
    const graph: Map<number, number[]> = new Map()

    for (let i: number = 1; i <= n; i++) {
        graph.set(i, [])
    }
    for (const [u, v] of edges) {
        graph.get(u)!.push(v)
        graph.get(v)!.push(u)
        dsu.union(u, v)
    }


    let maxGroups: number = 0
    const visitedComponents: Set<number> = new Set()

    for (let i: number = 1; i <= n; i++) {
        if (!visitedComponents.has(dsu.find(i))) {
            visitedComponents.add(dsu.find(i))
            const longestPath = bfsCheckBipartiteAndLongestPath(i, graph)
            if (longestPath === null) return -1
            maxGroups += longestPath
        }
    }

    return maxGroups
}

function bfsCheckBipartiteAndLongestPath(start: number, graph: Map<number, number[]>): number | null {
    const queue: [number, number][] = [[start, 0]]
    const visited: Map<number, number> = new Map()
    visited.set(start, 0)

    let farthestNode: number = start
    let maxDepth: number = 0

    while (queue.length) {
        const [node, depth] = queue.shift()!
        if (depth > maxDepth) {
            maxDepth = depth
            farthestNode = node
        }

        for (const neighbor of graph.get(node)!) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, 1 - visited.get(node)!)
                queue.push([neighbor, depth + 1])
            } else if (visited.get(neighbor) === visited.get(node)) {
                return null
            }
        }
    }

    queue.push([farthestNode, 0])
    visited.clear()
    visited.set(farthestNode, 0)
    maxDepth = 0

    while (queue.length) {
        const [node, depth] = queue.shift()!

        maxDepth = Math.max(maxDepth, depth)
        for (const neighbor of graph.get(node)!) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, 1 - visited.get(node)!)
                queue.push([neighbor, depth + 1])
            }
        }
    }

    return maxDepth + 1
}
